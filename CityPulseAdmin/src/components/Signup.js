import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="p-5 bg-white rounded-3 shadow-sm">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-1" style={{ color: "#212529" }}>
              Create Account
            </h2>
            <p className="text-muted">Join CityPulse Admin Dashboard</p>
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
                placeholder="Create password"
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
              Sign Up
            </Button>
          </Form>

          <div className="text-center text-muted mt-4">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-decoration-none fw-bold"
              style={{ color: "#212529" }}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
