import { Button } from "react-bootstrap";

const HomeContent = ({ user, onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold fs-4">CityPulse</span>
          <div className="d-flex align-items-center">
            <span className="text-light me-3 d-none d-sm-block">
              {user && user.email}
            </span>
            <Button
              variant="outline-light"
              onClick={onLogout}
              className="rounded-3 px-3 py-1"
            >
              Log out
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="p-5 bg-white rounded-3 shadow-sm text-center">
                <h2 className="fw-bold mb-4" style={{ color: "#212529" }}>
                  Welcome to Admin Dashboard
                </h2>
                <p className="lead text-muted mb-4">
                  You're logged in as: <strong>{user && user.email}</strong>
                </p>
                <div className="d-grid">
                  <Button
                    variant="dark"
                    className="py-2 rounded-3 fw-bold"
                    style={{ border: "none" }}
                    onClick={onLogout}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <div className="mb-3">
            <span className="fw-bold fs-5">CityPulse Admin</span>
          </div>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="#" className="text-white text-decoration-none">
              Dashboard
            </a>
            <a href="#" className="text-white text-decoration-none">
              Analytics
            </a>
            <a href="#" className="text-white text-decoration-none">
              Settings
            </a>
            <a href="#" className="text-white text-decoration-none">
              Support
            </a>
          </div>
          <div className="text-muted small">
            © {new Date().getFullYear()} CityPulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeContent;
