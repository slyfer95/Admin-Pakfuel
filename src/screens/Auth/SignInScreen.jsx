import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const response = await authApi.checkAuth();
      setLoading(false);

      if (!response.ok) {
        console.log(response.data.error);
        return;
      }

      setUser(response.data.user);
    };

    checkAuth();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();

    setLoading(true);
    const response = await authApi.login(email, password);
    setLoading(false);

    if (!response.ok) {
      setShowError(true);
      setError(response.data.error);
      setTimeout(() => setShowError(false), 4000);
      console.error("Login failed", response.problem);
      return;
    }

    setUser(response.data.user);
    navigate("/home");
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          {showError && (
            <Alert variant="danger" className="mb-4 text-center">
              {error || "Invalid Credentials!"}
            </Alert>
          )}
          <Card
            style={{
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
            }}
          >
            <Card.Body className="p-5">
              <h2 className="text-center text-white mb-5 font-weight-bold">
                Sign In
              </h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="email" className="mb-4">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                    required
                    className="py-2"
                  />
                </Form.Group>
                <Form.Group controlId="password" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      className="py-2"
                    />
                    <InputGroup.Text
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Button
                  variant="outline-light"
                  type="submit"
                  className="w-100 py-2 mt-4"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
