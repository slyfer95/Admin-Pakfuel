import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { FaGasPump } from "react-icons/fa"; // Importing gas pump icon

const PumpCard = ({ pump, onClick }) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={4} className="mb-4 w-100 h-100">
      <Card
        className="align-items-center"
        style={{
          padding: "0.5rem",
          borderRadius: "15px",
          height: "100%",
          background: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})`,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onClick={() => {
          onClick ? onClick() : navigate("/pumpscreen", { state: { pump } });
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {pump?.image && (
          <Card.Img
            className="w-75 mb-3"
            src={pump.image}
            style={{
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
        )}
        <Card.Body className="w-100">
          <ListGroup as="ul" variant="flush">
            <ListGroup.Item
              as="li"
              style={{
                background: "transparent",
                borderColor: COLORS.tertiary,
                color: COLORS.tertiary,
                fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaGasPump style={{ marginRight: "0.5rem" }} />{" "}
              {/* Adding gas pump icon */}
              {pump?.name &&
                pump.name.charAt(0).toUpperCase() + pump.name.slice(1)}
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              style={{
                background: "transparent",
                borderColor: COLORS.tertiary,
                color: COLORS.tertiary,
              }}
            >
              Location:{" "}
              {pump?.location &&
                pump.location.charAt(0).toUpperCase() + pump.location.slice(1)}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PumpCard;
