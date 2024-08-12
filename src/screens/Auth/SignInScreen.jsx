import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Remove destructuring
import Cookies from "js-cookie";
import authApi from "../../api/auth";
import { useCookies } from "react-cookie";

const SignIn = () => {
  const { setUser } = useContext(AppContext);
  // const [cookies] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const token = cookies.jwt;
  //   if (token) {
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       setUser(decodedToken);
  //       navigate("/home"); // Redirect to the home page after successful sign-in
  //     } catch (error) {
  //       Cookies.remove("jwt");
  //       setUser(null);
  //       console.log(error);
  //       navigate("/login");
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

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

    // try {

    //   if (response.ok) {
    //     console.log("Login successful", response.data);
    //     const token = cookies.jwt;
    //     console.log(useCookies["jwt"]);
    //     if (token) {
    //       setUser(jwtDecode(token));
    //       navigate("/home"); // Redirect to home after successful sign-in
    //     } else {
    //       console.error("JWT token is not set in the cookies.");
    //     }
    //   } else {
    //     // set show error to true for 4 seconds inside a timeout
    //     setShowError(true);
    //     setTimeout(() => setShowError(false), 4000);

    //     console.error("Login failed", response.problem);
    //   }
    // } catch (error) {
    //   console.error("An error occurred", error);
    // }
  };

  // useEffect(() => {
  //   if (token) {
  //   }
  // }, [token, Cookies.get("jwt")]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center mt-4"
    >
      <Row className="justify-content-center align-items-center w-100 mt-4">
        <Col className="" xs={12} md={6} lg={4}>
          {showError && (
            <Alert key={"danger"} variant="danger">
              Invalid Credentials!
              {error}
            </Alert>
          )}
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="password" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Sign In
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
