import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Maps from "./components/Maps";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <Container style={{ width: "1700px" }}>
              <Row>
                <Col>
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                </Col>
              </Row>
            </Container>
          }
        />
        <Route
          path="/"
          element={
            <Container style={{ width: "400px" }}>
              <Row>
                <Col>
                  <Login />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route
          path="/signup"
          element={
            <Container style={{ width: "400px" }}>
              <Row>
                <Col>
                  <Signup />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
