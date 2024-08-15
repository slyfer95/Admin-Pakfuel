import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import station from "../assets/images/station.jpg";
import { COLORS } from "../constants/constants.js";
const Home = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: COLORS.primary,

        padding: "2rem",
      }}
    >
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: "bold",
              fontFamily: "Arial Black, Gadget, sans-serif",
            }}
          >
            Welcome to <span style={{ color: COLORS.tertiary }}>PakFuel</span>
          </h1>

          <p>
            We provide Loyalty Programs for Fuel Stations and easy payment
            solutions using e-wallet payments.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src={station}
            alt="Fuel Station"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
            }}
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
