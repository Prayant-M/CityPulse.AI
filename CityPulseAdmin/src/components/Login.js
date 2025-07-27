import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="p-5 bg-white rounded-3 shadow-sm">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-1" style={{ color: "#212529" }}>
              CityPulse Admin
            </h2>
            <p className="text-muted">Sign in to your admin dashboard</p>
          </div>

          {error && (
            <Alert variant="danger" className="rounded-2">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 border-2"
                style={{ borderColor: "#dee2e6", borderRadius: "8px" }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 border-2"
                style={{ borderColor: "#dee2e6", borderRadius: "8px" }}
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="w-100 py-2 mb-3 rounded-3 fw-bold"
              style={{ backgroundColor: "#212529", border: "none" }}
            >
              Log In
            </Button>
          </Form>

          <div className="d-flex align-items-center mb-3">
            <div
              className="flex-grow-1 border-top"
              style={{ borderColor: "#dee2e6" }}
            ></div>
            <div className="px-3 text-muted">or</div>
            <div
              className="flex-grow-1 border-top"
              style={{ borderColor: "#dee2e6" }}
            ></div>
          </div>

          <div className="d-flex justify-content-center mb-4">
            <GoogleButton
              onClick={handleGoogleSignIn}
              style={{
                borderRadius: "8px",
                boxShadow: "none",
                border: "1px solid #dee2e6",
              }}
            />
          </div>

          <div className="text-center text-muted">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-decoration-none fw-bold"
              style={{ color: "#212529" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
