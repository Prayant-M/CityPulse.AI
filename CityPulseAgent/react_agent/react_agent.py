import google.generativeai as genai
import firebase_admin
from firebase_admin import firestore, credentials
from datetime import datetime
from flask import Flask, jsonify, request
import traceback

app = Flask(__name__)

# Initialize Firebase and Gemini
cred = credentials.Certificate("citypulseapp-5e012-firebase-adminsdk-fbsvc-50db401ae6.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
genai.configure()
react_model = genai.GenerativeModel("models/gemini-2.5-pro")

@app.route('/process-reflex-verdicts', methods=['POST'])
def process_reflex_verdicts():
    """Endpoint to process verdicts with verbose logging"""
    try:
        batch_size = request.json.get('batch_size', 10)
        results = []
        
        # Query unprocessed verdicts
        unprocessed = db.collection("reflex_verdicts")\
                      .where("processed_by_react", "==", False)\
                      .limit(batch_size)\
                      .stream()

        for doc in unprocessed:
            context = doc.to_dict()
            
            # Initialize react verdict document
            react_ref = db.collection("react_verdicts").document()
            react_data = {
                "start_time": datetime.utcnow().isoformat(),
                "reflex_verdict_id": doc.id,
                "cell_id": context["cell_id"],
                "category": context["category"],
                "thought_process": [],
                "actions": [],
                "final_verdict": None,
                "confidence": 0,
                "status": "processing"
            }
            react_ref.set(react_data)

            try:
                # Run analysis with verbose logging
                verdict, confidence = _analyze_with_logging(
                    context, 
                    react_ref,
                    react_data
                )
                
                # Update original verdict
                doc.reference.update({
                    "processed_by_react": True,
                    "react_verdict": verdict,
                    "crowd_confidence": confidence,
                    "react_processed_at": firestore.SERVER_TIMESTAMP
                })
                
                results.append({
                    "doc_id": doc.id,
                    "cell_id": context["cell_id"],
                    "verdict": verdict,
                    "confidence": confidence
                })

            except Exception as e:
                react_ref.update({
                    "status": "failed",
                    "error": str(e),
                    "end_time": datetime.utcnow().isoformat()
                })
                continue

        return jsonify({
            "status": "success",
            "processed": len(results),
            "results": results
        })

    except Exception as e:
        traceback.print_exc()
        return jsonify({"status": "error", "message": str(e)}), 500

def _analyze_with_logging(context, react_ref, react_data):
    """Perform analysis with detailed thought/action logging"""
    
    def _log_thought(thought):
        entry = {
            "timestamp": datetime.utcnow().isoformat(),
            "thought": thought
        }
        react_data["thought_process"].append(entry)
        react_ref.update({"thought_process": react_data["thought_process"]})

    def _log_action(action, result=None, executed=True):
        entry = {
            "timestamp": datetime.utcnow().isoformat(),
            "action": action,
            "result": str(result)[:500] if result else None,
            "executed": executed
        }
        react_data["actions"].append(entry)
        react_ref.update({"actions": react_data["actions"]})

    # Start analysis
    _log_thought(f"Beginning analysis for {context['category']} in cell {context['cell_id']}")
    
    # Evidence collection
    _log_thought("Collecting evidence from multiple sources")
    evidence = {
        "image": context["verdicts"]["image"],
        "news": context["verdicts"]["news"],
        "social": context["verdicts"]["social_media"],
        "weather": context["verdicts"]["weather_alerts"]
    }
    _log_action("Evidence collection", evidence)

    # Generate analysis prompt
    prompt = _generate_analysis_prompt(context)
    _log_thought("Generated analysis prompt")
    _log_action("Prompt generation", prompt[:500])  # Truncate for Firestore

    # Get model response
    _log_thought("Querying Gemini model for analysis")
    try:
        response = react_model.generate_content(prompt)
        analysis = response.text
        _log_action("Model response received", analysis[:500])
    except Exception as e:
        _log_action("Model query failed", str(e), False)
        raise

    # Determine verdict
    verdict, confidence = _interpret_response(analysis)
    _log_thought(f"Determined verdict: {verdict} (confidence: {confidence})")
    
    # Handle CellData update if confirmed
    if "confirmed" in verdict.lower():
        _log_thought("Updating CellData with confirmed incident")
        update_result = _update_cell_data(context['cell_id'], context['category'])
        _log_action("CellData update", update_result)
    else:
        _log_action("CellData update", "No update needed", False)

    # Finalize react verdict
    react_ref.update({
        "final_verdict": verdict,
        "confidence": confidence,
        "analysis": analysis[:10000],  # Truncate if needed
        "status": "completed",
        "end_time": datetime.utcnow().isoformat()
    })

    return verdict, confidence

def _generate_analysis_prompt(context):
    """Generate detailed analysis prompt"""
    return f"""
    **Disaster Verification Task**
    Location: {context['location']} (Cell {context['cell_id']})
    Category: {context['category']}
    
    **Evidence Summary:**
    1. Image Analysis: {context['verdicts']['image']}
    2. News Reports ({len(context['verdicts']['news']['articles'])}):
       - Headlines: {context['verdicts']['news']['articles'][:3]}
       - Overall Verdict: {context['verdicts']['news']['verdict']}
    3. Social Media:
       - Sample Posts: {context['verdicts']['social_media']['social_media_posts'][:3]}
       - Overall Verdict: {context['verdicts']['social_media']['verdict']}
    4. Weather Alerts:
       - Active Alerts: {[a['title'] for a in context['verdicts']['weather_alerts']['alerts'][:2]]}
    
    **Analysis Request:**
    1. Assess evidence consistency across sources
    2. Evaluate source credibility
    3. Provide final determination (Yes/No/Unsure)
    4. Assign confidence score (0-1)
    5. Recommend specific actions
    
    Please note that the final verdict should be based on a comprehensive analysis of all provided evidence. A lack of clear evidence should lead to a cautious approach, avoiding false positives. Incosistencies or conflicting reports should be highlighted, and the model should provide reasoning for its final determination. Inconsistencies should be flagged for further review, and the model should suggest follow-up actions if necessary as they are often an indication of false reports. 
    """

def _interpret_response(response_text):
    """Interpret model response with enhanced checks"""
    response_text = response_text.lower()
    if any(phrase in response_text for phrase in ["verdict: no", "determination: no"]):
        return "Dismissed", 0.0
    elif any(phrase in response_text for phrase in ["verdict: yes", "determination: yes"]):
        return "Confirmed", 1.0
    else:
        return "Unconfirmed", 0.5

def _update_cell_data(cell_id, category):
    """Update CellData with proper error handling"""
    try:
        cell_ref = db.collection("CellData").where("id", "==", cell_id).limit(1)
        docs = list(cell_ref.stream())
        
        if not docs:
            return "Cell not found"
        
        doc = docs[0]
        incidents = doc.to_dict().get("incidents", [])
        
        if category not in incidents:
            doc.reference.update({
                "incidents": firestore.ArrayUnion([category]),
                "last_updated": firestore.SERVER_TIMESTAMP,
                "status": "active"
            })
            return "Successfully added incident"
        return "Incident already exists"
    
    except Exception as e:
        return f"Update failed: {str(e)}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)