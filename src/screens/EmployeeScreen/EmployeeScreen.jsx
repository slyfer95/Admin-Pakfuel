import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { COLORS } from "../../constants/constants.js";
import profileImage from "../../assets/images/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeDetailListItem from "./components/EmployeeDetailListItem.jsx";

const EmployeeScreen = () => {
  const location = useLocation();
  const employee = location.state?.employee;
  const pumpId = location.state?.pumpId;
  const pump = location.state?.pump;

  const navigate = useNavigate();

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
            <p>email: {employee.email}</p>
            <p>ID: {employee._id}</p>
          </div>

          {/* <Row className="mt-3">
            <Button variant="danger" onClick={() => navigate("/pumpscreen")}>
              Remove Employee
            </Button>
          </Row> */}
          <Row className="mt-3 ">
            <Button variant="light" onClick={() => navigate(-1)}>
              Back to Pump Screen
            </Button>
          </Row>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} style={{ flex: 3 }}>
          {/* {!isEditing ? ( */}
          <Card
            style={{
              padding: "2rem",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          >
            <EmployeeDetailListItem employee={employee} pumpId={pumpId} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeScreen;
