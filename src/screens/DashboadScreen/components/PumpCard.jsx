import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";

const PumpCard = ({ pump, onClick }) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={4} className="mb-4 w-100 h-100">
      <Card
        className="align-items-center"
        style={{
          // textAlign: "center",
          padding: "0.5rem",
          borderRadius: "10px",
          height: "100%",
          backgroundColor: COLORS.secondary,
        }}
        onClick={() => {
          onClick ? onClick() : navigate("/pumpscreen", { state: { pump } });
        }}
      >
        {pump?.image && <Card.Img className="w-75" src={pump.image} />}
        <Card.Body className="w-100">
          <ListGroup as="ul">
            <ListGroup.Item as="li">{pump?.name}</ListGroup.Item>
            {/* <ListGroup.Item as="li">ID: {pump.id}</ListGroup.Item> */}
            <ListGroup.Item as="li">Location: {pump?.location}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PumpCard;
