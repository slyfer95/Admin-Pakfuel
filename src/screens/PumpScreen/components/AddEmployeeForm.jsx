import React from "react";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const AddEmployeeForm = ({
  formValues,
  setFormValues,
  handleFormChange,
  handleAddEmployee,
}) => (
  <Col>
    <Card
      style={{
        padding: "2rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        backgroundColor: COLORS.secondary,
      }}
    >
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Add New Employee
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
            onClick={handleAddEmployee}
            style={{
              backgroundColor: COLORS.tertiary,
              color: COLORS.primary,
              width: "40%",
            }}
          >
            Add Employee
          </Button>
        </Row>
      </Form>
    </Card>
  </Col>
);

export default AddEmployeeForm;
