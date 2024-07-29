import React, { useEffect, useState } from "react";
import { Col, Row, Card, Form, Button, Alert } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import adminApis from "../../../api/admin";
import useApi from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const AddEmployeeForm = ({ pumpId, setUseStatePump }) => {
  const [email, setEmail] = useState("");
  const addEmployeeToPumpApi = useApi(adminApis.addEmployeeToPump);
  const navigate = useNavigate();

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    await addEmployeeToPumpApi.request(email, pumpId);
  };

  useEffect(() => {
    if (addEmployeeToPumpApi.error) {
      console.error(
        "Failed to add employee",
        addEmployeeToPumpApi.responseProblem
      );
    }
    if (addEmployeeToPumpApi.data) {
      console.log("Employee added successfully");
      navigate(0);
    }
  }, [addEmployeeToPumpApi.error, addEmployeeToPumpApi.data]);

  return (
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
        {addEmployeeToPumpApi.error && (
          <Alert variant="danger">
            {addEmployeeToPumpApi.responseProblem}{" "}
            {addEmployeeToPumpApi.errorStatus}: {addEmployeeToPumpApi.error}
          </Alert>
        )}
        {addEmployeeToPumpApi.data && (
          <Alert variant="success">Employee Added Successfully</Alert>
        )}
        <Form onSubmit={handleAddEmployee}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
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
              value={pumpId}
              disabled
              style={{
                borderRadius: "8px",
                padding: "0.75rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <Row className="justify-content-center">
            <Button
              type="submit"
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
};

export default AddEmployeeForm;
