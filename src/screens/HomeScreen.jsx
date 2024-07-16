import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import station from "../assets/images/station.jpg";
import { COLORS } from "../constants/constants.js";
const Home = () => {
  return (
    <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <h1 style={{ fontSize: 50 }}>
            Welcome to <span style={{ color: COLORS.tertiary }}>PakFuel</span>
          </h1>
          <p>
            We provide Loyalty Programs for Fuel Stations and easy payment
            solutions using e-wallet payments.
          </p>
        </Col>
        <Col xs={12} md={6}>
          {/* You can add an image or any additional visual elements here */}
          <img
            src={station}
            alt="Fuel Station"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
