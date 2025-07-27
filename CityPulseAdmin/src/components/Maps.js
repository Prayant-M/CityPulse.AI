import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MapWrapper from "./MapComponent";

const Maps = () => {
  const [loading, setLoading] = useState(true);
  const [gridLoaded, setGridLoaded] = useState(false);
  const [isDashboardCollapsed, setIsDashboardCollapsed] = useState(false);

  useEffect(() => {
    // Simulate loading time for map initialization
    const timer = setTimeout(() => {
      setLoading(false);
      setGridLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Navigation Bar with Home Button */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          margin: 0,
        }}
      >
        <div className="container-fluid px-4">
          <span className="navbar-brand fw-bold fs-4">CityPulse Maps</span>

          {/* Home Button */}
          <div className="d-flex">
            <Link to="/home" className="nav-link text-white me-4">
              <Button variant="outline-light" className="rounded-3 px-3">
                Home
              </Button>
            </Link>
          </div>

          <div className="d-flex align-items-center ms-auto">
            {/* Add any additional navbar items here */}
          </div>
        </div>
      </nav>

      {/* Main Maps Content Area - Full Screen */}
      <main
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <MapWrapper
          center={{ lat: 12.95, lng: 77.635 }} // Centered around your cell data coordinates
          zoom={11} // Lower zoom to see more area and grid coverage
          style={{
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
          }}
        />

        {/* Optional overlay panel for controls/info */}
        <div
          className="position-absolute"
          style={{
            top: "80px",
            left: "16px",
            zIndex: 1000,
          }}
        >
          <div
            className="card shadow-sm"
            style={{
              width: isDashboardCollapsed ? "auto" : "300px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              {!isDashboardCollapsed && <h6 className="mb-0">CityPulse Dashboard</h6>}
              <Button
                variant="link"
                size="sm"
                className="text-white p-0"
                onClick={() => setIsDashboardCollapsed(!isDashboardCollapsed)}
                style={{ textDecoration: "none" }}
              >
                {isDashboardCollapsed ? "📊" : "➖"}
              </Button>
            </div>
            {!isDashboardCollapsed && (
              <div className="card-body p-3">
                <p className="small mb-2 text-muted">
                  Interactive city analytics and real-time data visualization
                </p>
                {loading && (
                  <div className="mb-3">
                    <div
                      className="spinner-border spinner-border-sm text-primary me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <small className="text-muted">Loading cell data...</small>
                  </div>
                )}

                {!loading && gridLoaded && (
                  <div className="mb-3">
                    <div
                      className="alert alert-success py-2 mb-2"
                      role="alert"
                      style={{ fontSize: "0.8rem" }}
                    >
                      ✅ Grid loaded successfully!
                    </div>
                  </div>
                )}

                {/* Grid Legend */}
                <div className="mb-3" style={{ fontSize: "0.8rem" }}>
                  <div className="fw-bold mb-2">Grid Color Legend:</div>
                  <div className="d-flex flex-wrap gap-1">
                    <span
                      className="badge"
                      style={{ backgroundColor: "#00FF00", color: "#000" }}
                    >
                      Safe
                    </span>
                    <span
                      className="badge"
                      style={{ backgroundColor: "#FFFF00", color: "#000" }}
                    >
                      Predicted Risk
                    </span>
                    <span
                      className="badge"
                      style={{ backgroundColor: "#FF0000", color: "#fff" }}
                    >
                      High Risk
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-2 mb-2">
                  <button className="btn btn-sm btn-outline-primary flex-fill">
                    Filters
                  </button>
                  <button className="btn btn-sm btn-outline-secondary flex-fill">
                    Layers
                  </button>
                </div>

                <div className="d-flex gap-2 mb-2">
                  <button
                    className="btn btn-sm btn-warning w-100"
                    onClick={() => {
                      console.log("Reloading grid for current view...");
                      window.location.reload();
                    }}
                  >
                    🔄 Reload Grid for Current View
                  </button>
                </div>
                <div className="mt-2">
                  <small className="text-muted">
                    🏠 Blue marker shows grid center
                    <br />
                    📍 Hover over grid cells to view details
                    <br />
                    🔍 Click cells to zoom in
                  </small>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Maps;
