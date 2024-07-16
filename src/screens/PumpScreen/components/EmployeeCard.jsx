import React from "react";
import { Card, Col, ListGroup, Button } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee, manager, handleAddManager, onClick }) => {
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
          onClick ? onClick() : navigate("/pumpscreen");
        }}
      >
        <Card.Img className="w-75" src={employee.image} />
        <Card.Body className="w-100">
          <ListGroup as="ul">
            <ListGroup.Item as="li">{employee.name}</ListGroup.Item>
            <ListGroup.Item as="li">ID: {employee.id}</ListGroup.Item>
            <ListGroup.Item as="li">Email: {employee.email}</ListGroup.Item>
            <ListGroup.Item as="li">
              Organization: {employee.organization}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Button
                variant={manager === employee.name ? "danger" : "success"}
                className="w-100"
                onClick={() => handleAddManager(employee.name)}
              >
                {manager === ""
                  ? "Make Manager"
                  : manager === employee.name
                  ? "Remove as Manager"
                  : "Make Manager"}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EmployeeCard;
