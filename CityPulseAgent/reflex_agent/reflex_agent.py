import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
from io import BytesIO
import base64
from PIL import Image
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime, timedelta
import json

# Load grid data at startup
with open('bengaluru_grid.json') as f:
    GRID_DATA = json.load(f)
    
def find_cell_id(lat, lon):
    """Find which grid cell contains the given coordinates using simple bounds check"""
    for cell in GRID_DATA:
        bounds = cell['bounds']
        min_lat, min_lon = bounds[0]
        max_lat, max_lon = bounds[1]
        
        if (min_lat <= lat <= max_lat) and (min_lon <= lon <= max_lon):
            return cell['id']
    return "Out of bounds"


cred = credentials.Certificate("citypulseapp-5e012-firebase-adminsdk-fbsvc-50db401ae6.json")
firebase_admin.initialize_app(cred)

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = Flask(__name__)
model = genai.GenerativeModel("models/gemini-2.5-flash")

from datetime import datetime

# Add this new function (don't modify existing ones)
def fetch_weather_alerts(lat, lon):
    """Fetch weather alerts from WeatherAPI.com"""
    try:
        response = requests.get(
            "http://api.weatherapi.com/v1/forecast.json",
            params={
                "key": os.getenv("WEATHERAPI_KEY"),
                "q": f"{lat},{lon}",
                "days": 2,
                "alerts": "yes"
            },
            timeout=8
        )
        if response.status_code == 200:
            alerts = response.json().get("alerts", {}).get("alert", [])
            return [{
                "title": alert.get("headline", "Weather Alert"),
                "severity": alert.get("severity", "Moderate"),
                "description": alert.get("desc", ""),
                "effective": alert.get("onset", ""),
                "expires": alert.get("expires", ""),
                "source": "WeatherAPI"
            } for alert in alerts]
    except Exception as e:
        print(f"WeatherAPI error: {e}")
    return []

def analyze_weather_alerts(alerts):
    """Basic weather alert analysis"""
    if not alerts:
        return "No active weather alerts"
    
    severities = [alert["severity"] for alert in alerts]
    highest_severity = max(severities, key=lambda x: len(x)) if severities else "None"
    
    return f"Weather alerts: {len(alerts)} ({highest_severity} severity)"

def download_image_as_base64(image_url):
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        image = Image.open(BytesIO(response.content)).convert("RGB")
        buffered = BytesIO()
        image.save(buffered, format="JPEG")
        return base64.b64encode(buffered.getvalue()).decode("utf-8")
    except Exception as e:
        print(f"Image download error: {e}")
        return None

def reverse_geocode(lat, lon):
    try:
        response = requests.get(
            "https://nominatim.openstreetmap.org/reverse",
            params={"lat": lat, "lon": lon, "format": "json"},
            headers={"User-Agent": "disaster-verifier/1.0"}
        )
        if response.status_code == 200:
            data = response.json()
            return data.get("display_name", "")
    except Exception as e:
        print(f"Geocoding error: {e}")
    return ""

def analyze_image_with_gemini(image_b64, category):
    prompt = f"""You are a disaster verification agent. Based on the category "{category}", analyze if the uploaded image visually matches the description.

Give a clear verdict ("Yes", "No", or "Unsure") and explain in 1 sentence.
Example: "Yes, this image clearly depicts a flooded area with submerged vehicles."
"""
    image_part = {
        "inline_data": {
            "mime_type": "image/jpeg",
            "data": image_b64
        }
    }

    response = model.generate_content(
        [prompt, image_part],
        generation_config={"temperature": 0.2}
    )
    return response.text.strip()

def fetch_news(category, location_string):
    url = "https://newsdata.io/api/1/news"
    params = {
        "apikey": os.getenv("NEWSDATA_API_KEY"),
        "q": category,
        "country": "in",
        "language": "en"
    }

    response = requests.get(url, params=params)
    if response.status_code != 200:
        return [], "News API failed"

    articles = response.json().get("results", [])
    filtered = [a for a in articles if location_string.lower() in (str(a.get("title", ""))) + str(a.get("description", "")).lower()]

    verdict = "Yes, relevant news found." if filtered else "No, no recent news found for this category and location."

    return filtered[:5], verdict

def fetch_twitter_posts(category, location_string):
    headers = {
        "Authorization": f"Bearer {os.getenv('TWITTER_BEARER_TOKEN')}"
    }
    
    # Calculate time range (last 7 days)
    end_time = datetime.now()
    start_time = end_time - timedelta(days=7)
    
    query = f"{category} {location_string} -is:retweet lang:en"
    
    try:
        response = requests.get(
            "https://api.twitter.com/2/tweets/search/recent",
            headers=headers,
            params={
                "query": query,
                "max_results": 10,
                "start_time": start_time.isoformat() + "Z",
                "end_time": end_time.isoformat() + "Z",
                "tweet.fields": "created_at,public_metrics"
            }
        )
        
        if response.status_code != 200:
            return [], "Twitter API failed"
            
        tweets = response.json().get("data", [])
        return tweets, ""
        
    except Exception as e:
        print(f"Twitter API error: {e}")
        return [], "Twitter API error"

def analyze_social_media_posts(posts, category, location_string):
    if not posts:
        return "No recent social media posts found about this incident."
    
    # Prepare context for Gemini
    context = f"""Analyze these social media posts about a potential {category} in {location_string}.
Determine if they collectively support the claim of this incident. Consider:
- Number of independent reports
- Consistency in descriptions
- Credibility indicators (engagement, details provided)

Posts:
"""
    for i, post in enumerate(posts[:5]):  # Limit to top 5 posts for token efficiency
        context += f"\n{i+1}. {post.get('text', '')}\n"
    
    context += "\nProvide a verdict ('Yes', 'No', or 'Unsure') and 1-2 sentence explanation."
    
    try:
        response = model.generate_content(
            context,
            generation_config={"temperature": 0.2}
        )
        return response.text.strip()
    except Exception as e:
        print(f"Gemini social media analysis error: {e}")
        return "Error analyzing social media posts"

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    category = data.get("category")
    image_url = data.get("image_url")
    lat = data.get("latitude")
    lon = data.get("longitude")

    if not (category and image_url and lat and lon):
        return jsonify({"error": "Missing category, image_url, or coordinates"}), 400

    cell_id = find_cell_id(lat, lon)
    
    # Reverse geocode
    resolved_location = reverse_geocode(lat, lon)
    if not resolved_location:
        return jsonify({"error": "Unable to resolve location"}), 500

    # Download image
    image_b64 = download_image_as_base64(image_url)
    if not image_b64:
        return jsonify({"error": "Failed to download or process image"}), 400

    # Analyze image
    verdict_image = analyze_image_with_gemini(image_b64, category)

    # Fetch news
    news_results, verdict_news = fetch_news(category, resolved_location)

    # Fetch and analyze Twitter posts
    twitter_posts, twitter_error = fetch_twitter_posts(category, resolved_location)
    verdict_social = analyze_social_media_posts(twitter_posts, category, resolved_location)
    
    weather_alerts = fetch_weather_alerts(lat, lon)
    weather_verdict = analyze_weather_alerts(weather_alerts)


    # Compile final response
    response = {
        "location": resolved_location,
        "verdicts": {
            "image_analysis": verdict_image,
            "news_analysis": {
                "verdict": verdict_news,
                "articles": news_results
            },
            "social_media_analysis": {
                "verdict": verdict_social,
                "posts": twitter_posts[:5]  # Return top 5 posts
            },
            "weather_alerts": {
                "verdict": weather_verdict,
                "alerts": weather_alerts
            }
        },
        "metadata": {
            "coordinates": {"latitude": lat, "longitude": lon},
            "category": category,
            "timestamp": datetime.utcnow().isoformat()
        }
    }
    
        # Store in Firestore
    try:
        db = firestore.client()
        doc_ref = db.collection("reflex_verdicts").document()
        doc_ref.set({
            "location": resolved_location,
            "cell_id": cell_id,
            "coordinates": firestore.GeoPoint(lat, lon),
            "category": category,
            "verdicts": {
                "image": verdict_image,
                "news": {
                    "verdict": verdict_news,
                    "articles": [article["title"] for article in news_results]
                },
                "social_media": {
                    "verdict": verdict_social,
                    "social_media_posts": [post["text"] for post in twitter_posts[:5]],
                },
                "weather_alerts": {
                    "verdict": weather_verdict,
                    "alerts": [{"title": alert["title"], "severity": alert["severity"]} for alert in weather_alerts]
                }
            },
            "sources": {
                "news_count": len(news_results),
                "social_media_count": len(twitter_posts),
                "weather_alert_count": len(weather_alerts)
            },
            "timestamp": firestore.SERVER_TIMESTAMP,
            "processed_at": datetime.utcnow().isoformat(),
            "crowd_confidence":0
        })
        response["metadata"]["firestore_id"] = doc_ref.id
    except Exception as e:
        print(f"Firestore error: {e}")
        response["metadata"]["firestore_error"] = str(e)

    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)