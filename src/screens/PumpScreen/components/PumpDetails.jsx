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
        padding: "1rem",
        height: "100%",
        width: "100%",
        borderRadius: "8px",
        marginBottom: "1rem",
        backgroundColor: COLORS.secondary,
      }}
    >
      <Col>
        <Row>
          <Col style={{ flex: "1" }}>
            <Image src={pso} thumbnail />
          </Col>
          <Col style={{ flex: "3" }}>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{pump.name}</p>
          </Col>
          <Col style={{ flex: "1", color: "gray" }}>
            <p>{pump.location}</p>
            {/* <p>No. of Employees: {pump.employees.length}</p> */}
          </Col>
        </Row>
      </Col>
    </Card>
  </Col>
);

export default PumpDetails;
