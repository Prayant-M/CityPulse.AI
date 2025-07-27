import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [reflexVerdicts, setReflexVerdicts] = useState([]);
  const [reactVerdicts, setReactVerdicts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reactLoading, setReactLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reactError, setReactError] = useState(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(userInput);
    setUserInput("");
  };

  // Fetch reflex_verdicts data from Firestore
  useEffect(() => {
    const fetchReflexVerdicts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "reflex_verdicts"));
        const verdicts = [];

        querySnapshot.forEach((doc) => {
          verdicts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setReflexVerdicts(verdicts);
        setError(null);
      } catch (err) {
        console.error("Error fetching reflex verdicts:", err);
        setError("Failed to load data from Firestore");
      } finally {
        setLoading(false);
      }
    };

    fetchReflexVerdicts();
  }, []);

  // Fetch react_verdicts data from Firestore
  useEffect(() => {
    const fetchReactVerdicts = async () => {
      try {
        setReactLoading(true);
        const querySnapshot = await getDocs(collection(db, "react_verdicts"));
        const verdicts = [];

        querySnapshot.forEach((doc) => {
          verdicts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setReactVerdicts(verdicts);
        setReactError(null);
      } catch (err) {
        console.error("Error fetching react verdicts:", err);
        setReactError("Failed to load react verdicts from Firestore");
      } finally {
        setReactLoading(false);
      }
    };

    fetchReactVerdicts();
  }, []);

  // Helper function to format field names
  const formatFieldName = (fieldName) => {
    return fieldName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Helper function to format field values
  const formatFieldValue = (value) => {
    if (value === null || value === undefined) return "N/A";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "object" && value.seconds) {
      // Handle Firestore timestamp
      return new Date(value.seconds * 1000).toLocaleString();
    }
    if (
      typeof value === "object" &&
      value._lat !== undefined &&
      value._long !== undefined
    ) {
      // Handle Firestore GeoPoint
      return `${value._lat.toFixed(6)}, ${value._long.toFixed(6)}`;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      // Handle other objects by converting to JSON string
      return JSON.stringify(value);
    }
    if (Array.isArray(value)) return value.join(", ");
    return value.toString();
  };

  // Helper function to get badge variant based on confidence
  const getConfidenceBadge = (confidence) => {
    if (confidence >= 0.7) return "success";
    if (confidence >= 0.4) return "warning";
    return "danger";
  };

  // Helper function to get status badge variant
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "success";
      case "unconfirmed":
        return "warning";
      case "rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  // Helper function to safely get nested verdict text
  const getVerdictText = (verdictObj, fallback = "No analysis available") => {
    if (typeof verdictObj === "string") return verdictObj;
    if (verdictObj && typeof verdictObj === "object" && verdictObj.verdict) {
      return verdictObj.verdict;
    }
    return fallback;
  };

  // Helper function to render Markdown content
  const renderMarkdown = (markdown) => {
    if (!markdown || typeof markdown !== "string")
      return "No content available";

    // Simple markdown parsing
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gm, '<h6 class="text-primary mb-2 mt-3">$1</h6>')
      .replace(/^## (.*$)/gm, '<h5 class="text-primary mb-2 mt-3">$1</h5>')
      .replace(/^# (.*$)/gm, '<h4 class="text-primary mb-2 mt-3">$1</h4>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.*?)__/g, "<strong>$1</strong>")
      // Italic text
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/_(.*?)_/g, "<em>$1</em>")
      // Code blocks
      .replace(
        /```([\s\S]*?)```/g,
        '<pre class="bg-light p-2 rounded"><code>$1</code></pre>'
      )
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-light px-1 rounded">$1</code>')
      // Lists
      .replace(/^\* (.*$)/gm, "<li>$1</li>")
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      .replace(/^\+ (.*$)/gm, "<li>$1</li>")
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-2">')
      .replace(/\n/g, "<br>");

    // Wrap list items in ul tags
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul class="mb-2">$1</ul>');

    // Wrap in paragraph tags if not already wrapped
    if (!html.startsWith("<")) {
      html = '<p class="mb-2">' + html + "</p>";
    }

    return html;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Full-width Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm"
        style={{
          width: "100vw",
          marginLeft: "-50vw",
          left: "50%",
          position: "relative",
        }}
      >
        <div className="container-fluid px-4 mx-auto" style={{ width: "100%" }}>
          <span className="navbar-brand fw-bold fs-4">CityPulse Admin</span>

          <div className="d-flex">
            <Link to="/maps" className="nav-link text-white me-4">
              Maps
            </Link>
          </div>

          <div className="d-flex align-items-center ms-auto">
            <span className="text-white me-3">{user && user.email}</span>
            <Button
              variant="outline-light"
              onClick={handleLogout}
              className="rounded-3 px-3"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow-1 bg-light">
        <div className="container-fluid h-100 p-4">
          <div className="row h-100 justify-content-center">
            <div className="col-12">
              {/* Display Submitted Text */}
              {submittedText && (
                <div className="p-3 mb-3 bg-white rounded-3 shadow-sm">
                  <p className="mb-0">{submittedText}</p>
                </div>
              )}

              {/* Reflex Verdicts Section */}
              <div className="mb-4 w-100">
                <h3 className="mb-4 text-dark">Reflex Verdicts</h3>

                {loading && (
                  <div className="text-center py-4">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className="mt-2 text-muted">
                      Loading reflex verdicts...
                    </p>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {!loading && !error && reflexVerdicts.length === 0 && (
                  <div className="alert alert-info" role="alert">
                    No reflex verdicts found in the database.
                  </div>
                )}

                {!loading && !error && reflexVerdicts.length > 0 && (
                  <Accordion className="w-100">
                    {reflexVerdicts.map((verdict, index) => (
                      <Accordion.Item
                        eventKey={index.toString()}
                        key={verdict.id}
                        className="mb-3"
                      >
                        <Accordion.Header className="w-100">
                          <div className="d-flex align-items-center justify-content-between w-100 pe-4">
                            <div className="d-flex align-items-center flex-grow-1">
                              <strong className="me-3 fs-5">
                                Cell ID: {verdict.cell_id || "Unknown"}
                              </strong>
                              {verdict.crowd_confidence !== undefined && (
                                <Badge
                                  bg={getConfidenceBadge(
                                    verdict.crowd_confidence
                                  )}
                                  className="me-3 px-3 py-2"
                                  style={{ fontSize: "0.85rem" }}
                                >
                                  Confidence:{" "}
                                  {(verdict.crowd_confidence * 100).toFixed(1)}%
                                </Badge>
                              )}
                              <Badge bg="secondary" className="me-2">
                                {verdict.category || "Unknown Category"}
                              </Badge>
                            </div>
                            {verdict.location && (
                              <div
                                className="text-muted text-truncate flex-shrink-1"
                                style={{
                                  maxWidth: "400px",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {verdict.location}
                              </div>
                            )}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="row">
                            {/* Basic Information */}
                            <div className="col-md-3 mb-3">
                              <Card className="h-100">
                                <Card.Header className="bg-primary text-white">
                                  <h6 className="mb-0">Basic Information</h6>
                                </Card.Header>
                                <Card.Body>
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <strong>Cell ID:</strong>{" "}
                                      {verdict.cell_id || "N/A"}
                                    </div>
                                    <div className="col-12">
                                      <strong>Category:</strong>{" "}
                                      <Badge bg="info" className="ms-1">
                                        {verdict.category || "N/A"}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Coordinates:</strong>{" "}
                                      {formatFieldValue(verdict.coordinates)}
                                    </div>
                                    <div className="col-12">
                                      <strong>Confidence:</strong>
                                      <Badge
                                        bg={getConfidenceBadge(
                                          verdict.crowd_confidence
                                        )}
                                        className="ms-2"
                                      >
                                        {verdict.crowd_confidence !== undefined
                                          ? (
                                              verdict.crowd_confidence * 100
                                            ).toFixed(1) + "%"
                                          : "N/A"}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Processed At:</strong>{" "}
                                      <small className="text-muted">
                                        {formatFieldValue(verdict.processed_at)}
                                      </small>
                                    </div>
                                    <div className="col-12">
                                      <strong>Timestamp:</strong>{" "}
                                      <small className="text-muted">
                                        {formatFieldValue(verdict.timestamp)}
                                      </small>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                            {/* Location Information */}
                            <div className="col-md-5 mb-3">
                              <Card className="h-100">
                                <Card.Header className="bg-success text-white">
                                  <h6 className="mb-0">Location Details</h6>
                                </Card.Header>
                                <Card.Body>
                                  <p className="mb-0 small">
                                    {verdict.location ||
                                      "Location not available"}
                                  </p>
                                </Card.Body>
                              </Card>
                            </div>

                            {/* Sources Summary */}
                            <div className="col-md-4 mb-3">
                              <Card className="h-100">
                                <Card.Header className="bg-info text-white">
                                  <h6 className="mb-0">Sources Summary</h6>
                                </Card.Header>
                                <Card.Body>
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <strong>News Count:</strong>{" "}
                                      <Badge bg="primary">
                                        {verdict.sources?.news_count || 0}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Social Media Count:</strong>{" "}
                                      <Badge bg="primary">
                                        {verdict.sources?.social_media_count ||
                                          0}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Weather Alert Count:</strong>{" "}
                                      <Badge bg="primary">
                                        {verdict.sources?.weather_alert_count ||
                                          0}
                                      </Badge>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                            {/* AI Verdicts Section */}
                            {verdict.verdicts && (
                              <div className="col-12 mb-3">
                                <Card>
                                  <Card.Header className="bg-dark text-white">
                                    <h6 className="mb-0">
                                      🤖 AI Analysis Verdicts
                                    </h6>
                                  </Card.Header>
                                  <Card.Body>
                                    <div className="row g-3">
                                      {/* Image Analysis */}
                                      <div className="col-md-12 mb-3">
                                        <div className="border-start border-primary border-4 ps-3">
                                          <h6 className="text-primary mb-2">
                                            📸 Image Analysis
                                          </h6>
                                          <p className="mb-0 small">
                                            {getVerdictText(
                                              verdict.verdicts.image,
                                              "No image analysis available"
                                            )}
                                          </p>
                                        </div>
                                      </div>

                                      {/* News Analysis */}
                                      <div className="col-md-4">
                                        <div className="border-start border-warning border-4 ps-3">
                                          <h6 className="text-warning mb-2">
                                            📰 News Analysis
                                          </h6>
                                          {verdict.verdicts.news &&
                                            verdict.verdicts.news.articles && (
                                              <>
                                                <strong className="small">
                                                  Articles Verdict:
                                                </strong>
                                                <p className="small mb-2 text-muted">
                                                  {getVerdictText(
                                                    verdict.verdicts.news
                                                      .articles,
                                                    "No verdict available"
                                                  )}
                                                </p>
                                              </>
                                            )}
                                          <strong className="small">
                                            Overall:
                                          </strong>
                                          <p className="small mb-0">
                                            {getVerdictText(
                                              verdict.verdicts.news,
                                              "No news analysis available"
                                            )}
                                          </p>
                                        </div>
                                      </div>

                                      {/* Social Media Analysis */}
                                      <div className="col-md-4">
                                        <div className="border-start border-danger border-4 ps-3">
                                          <h6 className="text-danger mb-2">
                                            📱 Social Media Analysis
                                          </h6>
                                          {verdict.verdicts.social_media &&
                                            verdict.verdicts.social_media
                                              .social_media_posts && (
                                              <>
                                                <strong className="small">
                                                  Posts Verdict:
                                                </strong>
                                                <p className="small mb-2 text-muted">
                                                  {getVerdictText(
                                                    verdict.verdicts
                                                      .social_media
                                                      .social_media_posts,
                                                    "No verdict available"
                                                  )}
                                                </p>
                                              </>
                                            )}
                                          <strong className="small">
                                            Overall:
                                          </strong>
                                          <p className="small mb-0">
                                            {getVerdictText(
                                              verdict.verdicts.social_media,
                                              "No social media analysis available"
                                            )}
                                          </p>
                                        </div>
                                      </div>

                                      {/* Weather Analysis */}
                                      <div className="col-md-4">
                                        <div className="border-start border-info border-4 ps-3">
                                          <h6 className="text-info mb-2">
                                            🌤️ Weather Analysis
                                          </h6>
                                          {verdict.verdicts.weather_alerts &&
                                            verdict.verdicts.weather_alerts
                                              .alerts && (
                                              <>
                                                <strong className="small">
                                                  Alerts Verdict:
                                                </strong>
                                                <p className="small mb-2 text-muted">
                                                  {getVerdictText(
                                                    verdict.verdicts
                                                      .weather_alerts.alerts,
                                                    "No verdict available"
                                                  )}
                                                </p>
                                              </>
                                            )}
                                          <strong className="small">
                                            Overall:
                                          </strong>
                                          <p className="small mb-0">
                                            {getVerdictText(
                                              verdict.verdicts.weather_alerts,
                                              "No weather analysis available"
                                            )}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            )}

                            {/* Data Sources Details */}
                            <div className="col-12 mb-3">
                              <Accordion>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    <strong>📊 Detailed Source Analysis</strong>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="row g-3">
                                      {/* News Details */}
                                      {verdict.news && (
                                        <div className="col-md-4">
                                          <Card className="h-100">
                                            <Card.Header className="bg-warning text-dark">
                                              <h6 className="mb-0">
                                                📰 News Details
                                              </h6>
                                            </Card.Header>
                                            <Card.Body>
                                              {verdict.news.articles && (
                                                <div>
                                                  <strong>
                                                    Articles Verdict:
                                                  </strong>
                                                  <p className="small mb-0 text-muted">
                                                    {getVerdictText(
                                                      verdict.news.articles,
                                                      "No verdict available"
                                                    )}
                                                  </p>
                                                </div>
                                              )}
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      )}

                                      {/* Social Media Details */}
                                      {verdict.social_media && (
                                        <div className="col-md-4">
                                          <Card className="h-100">
                                            <Card.Header className="bg-danger text-white">
                                              <h6 className="mb-0">
                                                📱 Social Media Details
                                              </h6>
                                            </Card.Header>
                                            <Card.Body>
                                              {verdict.social_media
                                                .social_media_posts && (
                                                <div>
                                                  <strong>
                                                    Posts Verdict:
                                                  </strong>
                                                  <p className="small mb-0 text-muted">
                                                    {getVerdictText(
                                                      verdict.social_media
                                                        .social_media_posts,
                                                      "No verdict available"
                                                    )}
                                                  </p>
                                                </div>
                                              )}
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      )}

                                      {/* Weather Details */}
                                      {verdict.weather_alerts && (
                                        <div className="col-md-4">
                                          <Card className="h-100">
                                            <Card.Header className="bg-info text-white">
                                              <h6 className="mb-0">
                                                🌤️ Weather Details
                                              </h6>
                                            </Card.Header>
                                            <Card.Body>
                                              {verdict.weather_alerts
                                                .alerts && (
                                                <div>
                                                  <strong>
                                                    Alerts Verdict:
                                                  </strong>
                                                  <p className="small mb-0 text-muted">
                                                    {getVerdictText(
                                                      verdict.weather_alerts
                                                        .alerts,
                                                      "No verdict available"
                                                    )}
                                                  </p>
                                                </div>
                                              )}
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      )}
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          </div>

                          {/* Additional Fields */}
                          {Object.keys(verdict).filter(
                            (key) =>
                              ![
                                "id",
                                "cell_id",
                                "category",
                                "coordinates",
                                "crowd_confidence",
                                "location",
                                "processed_at",
                                "timestamp",
                                "sources",
                                "verdicts",
                                "news",
                                "social_media",
                                "weather_alerts",
                              ].includes(key)
                          ).length > 0 && (
                            <Card className="mt-3">
                              <Card.Header className="bg-light text-dark">
                                <h6 className="mb-0">Additional Information</h6>
                              </Card.Header>
                              <Card.Body>
                                <div className="row g-2">
                                  {Object.entries(verdict)
                                    .filter(
                                      ([key]) =>
                                        ![
                                          "id",
                                          "cell_id",
                                          "category",
                                          "coordinates",
                                          "crowd_confidence",
                                          "location",
                                          "processed_at",
                                          "timestamp",
                                          "sources",
                                          "verdicts",
                                          "news",
                                          "social_media",
                                          "weather_alerts",
                                        ].includes(key)
                                    )
                                    .map(([key, value]) => (
                                      <div key={key} className="col-md-6">
                                        <strong>{formatFieldName(key)}:</strong>{" "}
                                        {formatFieldValue(value)}
                                      </div>
                                    ))}
                                </div>
                              </Card.Body>
                            </Card>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                )}
              </div>

              {/* React Verdicts Section */}
              <div className="mb-4 w-100">
                <h3 className="mb-4 text-dark">React Verdicts</h3>

                {reactLoading && (
                  <div className="text-center py-4">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className="mt-2 text-muted">Loading react verdicts...</p>
                  </div>
                )}

                {reactError && (
                  <div className="alert alert-danger" role="alert">
                    {reactError}
                  </div>
                )}

                {!reactLoading && !reactError && reactVerdicts.length === 0 && (
                  <div className="alert alert-info" role="alert">
                    No react verdicts found in the database.
                  </div>
                )}

                {!reactLoading && !reactError && reactVerdicts.length > 0 && (
                  <Accordion className="w-100">
                    {reactVerdicts.map((verdict, index) => (
                      <Accordion.Item
                        eventKey={`react-${index.toString()}`}
                        key={verdict.id}
                        className="mb-3"
                      >
                        <Accordion.Header className="w-100">
                          <div className="d-flex align-items-center justify-content-between w-100 pe-4">
                            <div className="d-flex align-items-center flex-grow-1">
                              <strong className="me-3 fs-5">
                                Cell ID: {verdict.cell_id || "Unknown"}
                              </strong>
                              {verdict.confidence !== undefined && (
                                <Badge
                                  bg={getConfidenceBadge(verdict.confidence)}
                                  className="me-3 px-3 py-2"
                                  style={{ fontSize: "0.85rem" }}
                                >
                                  Confidence:{" "}
                                  {(verdict.confidence * 100).toFixed(1)}%
                                </Badge>
                              )}
                              <Badge bg="secondary" className="me-2">
                                {verdict.category || "Unknown Category"}
                              </Badge>
                              <Badge
                                bg={getStatusBadge(verdict.status)}
                                className="me-2"
                              >
                                {verdict.status || "Unknown Status"}
                              </Badge>
                            </div>
                            <div
                              className="text-muted text-truncate flex-shrink-1"
                              style={{
                                maxWidth: "300px",
                                fontSize: "0.9rem",
                              }}
                            >
                              {verdict.final_verdict || "No verdict"}
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="row">
                            {/* Basic Information */}
                            <div className="col-md-4 mb-3">
                              <Card className="h-100">
                                <Card.Header className="bg-primary text-white">
                                  <h6 className="mb-0">Basic Information</h6>
                                </Card.Header>
                                <Card.Body>
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <strong>Cell ID:</strong>{" "}
                                      {verdict.cell_id || "N/A"}
                                    </div>
                                    <div className="col-12">
                                      <strong>Category:</strong>{" "}
                                      <Badge bg="info" className="ms-1">
                                        {verdict.category || "N/A"}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Status:</strong>{" "}
                                      <Badge
                                        bg={getStatusBadge(verdict.status)}
                                        className="ms-1"
                                      >
                                        {verdict.status || "N/A"}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Confidence:</strong>
                                      <Badge
                                        bg={getConfidenceBadge(
                                          verdict.confidence
                                        )}
                                        className="ms-2"
                                      >
                                        {verdict.confidence !== undefined
                                          ? (verdict.confidence * 100).toFixed(
                                              1
                                            ) + "%"
                                          : "N/A"}
                                      </Badge>
                                    </div>
                                    <div className="col-12">
                                      <strong>Processing Time:</strong>{" "}
                                      <small className="text-muted">
                                        {verdict.processing_time_sec
                                          ? `${verdict.processing_time_sec.toFixed(
                                              2
                                            )}s`
                                          : "N/A"}
                                      </small>
                                    </div>
                                    <div className="col-12">
                                      <strong>Start Time:</strong>{" "}
                                      <small className="text-muted">
                                        {formatFieldValue(verdict.start_time)}
                                      </small>
                                    </div>
                                    <div className="col-12">
                                      <strong>End Time:</strong>{" "}
                                      <small className="text-muted">
                                        {formatFieldValue(verdict.end_time)}
                                      </small>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                            {/* Final Verdict */}
                            <div className="col-md-8 mb-3">
                              <Card className="h-100">
                                <Card.Header className="bg-success text-white">
                                  <h6 className="mb-0">Final Verdict</h6>
                                </Card.Header>
                                <Card.Body>
                                  <p className="mb-0 small">
                                    {verdict.final_verdict ||
                                      "No final verdict available"}
                                  </p>
                                </Card.Body>
                              </Card>
                            </div>

                            {/* Analysis */}
                            {verdict.analysis && (
                              <div className="col-12 mb-3">
                                <Card>
                                  <Card.Header className="bg-dark text-white">
                                    <h6 className="mb-0">
                                      🔍 Detailed Analysis
                                    </h6>
                                  </Card.Header>
                                  <Card.Body>
                                    <div
                                      className="analysis-content small"
                                      dangerouslySetInnerHTML={{
                                        __html: renderMarkdown(
                                          verdict.analysis
                                        ),
                                      }}
                                      style={{
                                        lineHeight: "1.5",
                                        fontSize: "0.9rem",
                                      }}
                                    />
                                  </Card.Body>
                                </Card>
                              </div>
                            )}

                            {/* Thought Process */}
                            {verdict.thought_process &&
                              verdict.thought_process.length > 0 && (
                                <div className="col-12 mb-3">
                                  <Card>
                                    <Card.Header className="bg-info text-white">
                                      <h6 className="mb-0">
                                        🧠 Thought Process
                                      </h6>
                                    </Card.Header>
                                    <Card.Body>
                                      <div className="timeline">
                                        {verdict.thought_process.map(
                                          (thought, idx) => (
                                            <div
                                              key={idx}
                                              className="mb-3 pb-3 border-bottom border-light"
                                            >
                                              <div className="d-flex justify-content-between align-items-start">
                                                <div className="flex-grow-1">
                                                  <Badge
                                                    bg="secondary"
                                                    className="mb-2"
                                                  >
                                                    Step {idx + 1}
                                                  </Badge>
                                                  <p className="mb-1 small">
                                                    {thought.thought}
                                                  </p>
                                                </div>
                                                <small className="text-muted ms-3">
                                                  {formatFieldValue(
                                                    thought.timestamp
                                                  )}
                                                </small>
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </Card.Body>
                                  </Card>
                                </div>
                              )}

                            {/* Actions */}
                            {verdict.actions && verdict.actions.length > 0 && (
                              <div className="col-12 mb-3">
                                <Card>
                                  <Card.Header className="bg-warning text-dark">
                                    <h6 className="mb-0">⚡ Actions Taken</h6>
                                  </Card.Header>
                                  <Card.Body>
                                    <div className="row g-3">
                                      {verdict.actions.map((action, idx) => (
                                        <div key={idx} className="col-md-6">
                                          <Card className="h-100 border-start border-warning border-4">
                                            <Card.Body className="p-3">
                                              <div className="d-flex justify-content-between align-items-start mb-2">
                                                <Badge
                                                  bg="warning"
                                                  text="dark"
                                                  className="mb-2"
                                                >
                                                  Action {idx + 1}
                                                </Badge>
                                                <small className="text-muted">
                                                  {formatFieldValue(
                                                    action.timestamp
                                                  )}
                                                </small>
                                              </div>
                                              <h6 className="small mb-2">
                                                {action.action}
                                              </h6>
                                              <div className="mb-2">
                                                <strong className="small">
                                                  Action Needed:
                                                </strong>{" "}
                                                <Badge
                                                  bg={
                                                    action.action_needed
                                                      ? "success"
                                                      : "secondary"
                                                  }
                                                >
                                                  {action.action_needed
                                                    ? "Yes"
                                                    : "No"}
                                                </Badge>
                                              </div>
                                              <div className="mb-2">
                                                <strong className="small">
                                                  Executed:
                                                </strong>{" "}
                                                <Badge
                                                  bg={
                                                    action.executed
                                                      ? "success"
                                                      : "danger"
                                                  }
                                                >
                                                  {action.executed
                                                    ? "Yes"
                                                    : "No"}
                                                </Badge>
                                              </div>
                                              {action.result && (
                                                <div>
                                                  <strong className="small">
                                                    Result:
                                                  </strong>
                                                  <p className="small mb-0 text-muted mt-1">
                                                    {action.result}
                                                  </p>
                                                </div>
                                              )}
                                            </Card.Body>
                                          </Card>
                                        </div>
                                      ))}
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            )}

                            {/* Additional Fields */}
                            {Object.keys(verdict).filter(
                              (key) =>
                                ![
                                  "id",
                                  "cell_id",
                                  "category",
                                  "confidence",
                                  "final_verdict",
                                  "status",
                                  "analysis",
                                  "thought_process",
                                  "actions",
                                  "processing_time_sec",
                                  "start_time",
                                  "end_time",
                                  "reflex_verdict_id",
                                ].includes(key)
                            ).length > 0 && (
                              <Card className="mt-3">
                                <Card.Header className="bg-light text-dark">
                                  <h6 className="mb-0">
                                    Additional Information
                                  </h6>
                                </Card.Header>
                                <Card.Body>
                                  <div className="row g-2">
                                    {Object.entries(verdict)
                                      .filter(
                                        ([key]) =>
                                          ![
                                            "id",
                                            "cell_id",
                                            "category",
                                            "confidence",
                                            "final_verdict",
                                            "status",
                                            "analysis",
                                            "thought_process",
                                            "actions",
                                            "processing_time_sec",
                                            "start_time",
                                            "end_time",
                                            "reflex_verdict_id",
                                          ].includes(key)
                                      )
                                      .map(([key, value]) => (
                                        <div key={key} className="col-md-6">
                                          <strong>
                                            {formatFieldName(key)}:
                                          </strong>{" "}
                                          {formatFieldValue(value)}
                                        </div>
                                      ))}
                                  </div>
                                </Card.Body>
                              </Card>
                            )}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Compact Dialog Box */}
      <div
        className="bg-dark text-white py-2 px-3"
        style={{
          width: "100vw",
          marginLeft: "-50vw",
          left: "50%",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Form onSubmit={handleSubmit} className="d-flex gap-2">
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Write your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow-1 border-0 shadow-sm"
            style={{
              borderRadius: "20px",
              minHeight: "40px",
              resize: "none",
              padding: "8px 16px",
            }}
          />
          <Button
            variant="light"
            type="submit"
            className="rounded-pill px-3"
            style={{
              height: "40px",
              whiteSpace: "nowrap",
            }}
          >
            Post
          </Button>
        </Form>
      </div>

      {/* Footer */}
      <footer
        className="bg-dark text-white py-2"
        style={{
          width: "100vw",
          marginLeft: "-50vw",
          left: "50%",
          position: "relative",
        }}
      >
        <div className="container-fluid px-4 text-center">
          <div className="text-white small" style={{ fontSize: "0.7rem" }}>
            © {new Date().getFullYear()} CityPulse Admin. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
