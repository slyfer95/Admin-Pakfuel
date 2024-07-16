import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import { COLORS } from "../../constants/constants.js";
import profileImage from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import EmployeeDetailListItem from "./components/EmployeeDetailListItem.jsx";

const EmployeeScreen = () => {
  const [employee, setEmployee] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    pumpId: "PUMP123",
    id: "123-456-7890",
    role: "Manager",
    organization: "PSO",
    isVerified: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(employee);
  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSaveChanges = () => {
    setEmployee(formValues);
    setIsEditing(false);
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col
          xs={12}
          md={3}
          style={{
            flex: 1,
            backgroundColor: COLORS.tertiary,
            color: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Image
              src={profileImage}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ marginBottom: "0.5rem" }}>{employee.name}</h3>
            <p>Role: {employee.role}</p>
            <p>ID: {employee.id}</p>
            <p>Organization: {employee.organization}</p>
          </div>
          <Row>
            <Button variant="light" onClick={handleEditButtonClick}>
              {isEditing ? "Cancel Edit" : "Edit Employee"}
            </Button>
          </Row>
          <Row className="mt-3">
            <Button variant="danger" onClick={() => navigate("/pumpscreen")}>
              Remove Employee
            </Button>
          </Row>
          <Row className="mt-3">
            <Button variant="light" onClick={() => navigate("/pumpscreen")}>
              Back to Pump Screen
            </Button>
          </Row>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} style={{ flex: 3 }}>
          {!isEditing ? (
            <Card
              style={{
                padding: "2rem",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            >
              <EmployeeDetailListItem employee={employee} />
            </Card>
          ) : (
            <Card
              style={{
                padding: "2rem",
                borderRadius: "8px",
                marginBottom: "1rem",
                backgroundColor: COLORS.secondary,
              }}
            >
              <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
                Edit Employee
              </h4>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleFormChange}
                    style={{
                      borderRadius: "8px",
                      padding: "0.75rem",
                      marginBottom: "1rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleFormChange}
                    style={{
                      borderRadius: "8px",
                      padding: "0.75rem",
                      marginBottom: "1rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleFormChange}
                    style={{
                      borderRadius: "8px",
                      padding: "0.75rem",
                      marginBottom: "1rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formPumpId">
                  <Form.Label>Pump ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="pumpId"
                    value={formValues.pumpId}
                    onChange={handleFormChange}
                    style={{
                      borderRadius: "8px",
                      padding: "0.75rem",
                      marginBottom: "1rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formIsVerified">
                  <Form.Check
                    type="checkbox"
                    name="isVerified"
                    label="Verified"
                    checked={formValues.isVerified}
                    onChange={(e) =>
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        isVerified: e.target.checked,
                      }))
                    }
                    style={{
                      marginBottom: "1rem",
                    }}
                  />
                </Form.Group>
                <Row className="justify-content-center">
                  <Button
                    onClick={handleSaveChanges}
                    style={{
                      backgroundColor: COLORS.tertiary,
                      color: COLORS.primary,
                      width: "40%",
                    }}
                  >
                    Save Changes
                  </Button>
                </Row>
              </Form>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeScreen;
