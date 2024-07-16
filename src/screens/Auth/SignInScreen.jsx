import React, { useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    setUser(true);
    navigate("/"); // Redirect to the home page after successful sign-in
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center mt-4"
    >
      <Row className="justify-content-center align-items-center w-100 mt-4">
        <Col className="" xs={12} md={6} lg={4}>
          <Card className="shadow-lg mt-4">
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
