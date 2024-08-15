// PumpDetails.jsx
import React from "react";
import { Col, Card, Image, Row } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import pso from "../../../assets/images/pso.png";

const PumpDetails = ({ pump }) => (
  <Col>
    <Card
      style={{
        textAlign: "center",
        padding: "1.5rem",
        height: "100%",
        width: "100%",
        borderRadius: "15px",
        marginBottom: "1.5rem",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Row className="align-items-center">
        <Col xs={12} md={3} style={{ color: COLORS.primary }}>
          <p>Total Employees: {pump.employees.length}</p>
        </Col>
        <Col xs={12} md={6}>
          <h2 style={{ fontWeight: "bold", color: "#fff" }}>
            {pump.name.charAt(0).toUpperCase() + pump.name.slice(1)}
          </h2>
        </Col>
        <Col xs={12} md={3} style={{ color: COLORS.primary }}>
          <p>{pump.location}</p>
        </Col>
      </Row>
    </Card>
  </Col>
);

export default PumpDetails;
