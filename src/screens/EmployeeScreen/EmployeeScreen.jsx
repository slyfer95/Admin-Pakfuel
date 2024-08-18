import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { COLORS } from "../../constants/constants.js";
import profileImage from "../../assets/images/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeDetailListItem from "./components/EmployeeDetailListItem.jsx";

const EmployeeScreen = () => {
  const location = useLocation();
  const employee = location.state?.employee;
  const navigate = useNavigate();

  return (
    <Container fluid className="py-4">
      <Row>
        <Col xs={12} md={4} lg={3} className="mb-4">
          <Card
            className="text-center shadow"
            style={{
              color: "#000",
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              alignItems: "center",
              fontFamily: "'Roboto', sans-serif",
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
              backdropFilter: "blur(5px)",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(0, 0, 128, 0.4)",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(127, 0, 255, 0.4)",
                zIndex: -1,
              }}
            />
            <Card.Body>
              <Image
                src={employee.imageUrl || profileImage}
                alt="Profile"
                roundedCircle
                className="mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {employee.name.charAt(0).toUpperCase() + employee.name.slice(1)}
              </h3>

              <Button
                variant="outline-light"
                className="mt-3 w-100"
                onClick={() => navigate(-1)}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Back to Pump Screen
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8} lg={9}>
          <EmployeeDetailListItem employee={employee} />
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeScreen;
