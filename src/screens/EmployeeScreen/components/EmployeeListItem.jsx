import React from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaGasPump } from "react-icons/fa";

const EmployeeListItem = ({ employee }) => {
  const navigate = useNavigate();

  return (
    <ListGroup.Item
      action
      onClick={() => navigate("/employee", { state: { employee } })}
      className="py-3"
    >
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <FaUser className="me-2" />
          {employee.name}
        </Col>
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <FaEnvelope className="me-2" />
          {employee.email}
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <FaPhone className="me-2" />
          {employee.phoneNumber}
        </Col>
        <Col xs={12} md={2} className="mb-2 mb-md-0">
          <FaGasPump className="me-2" />
          {employee.pumpId ? employee.pumpId.name : "Unassigned"}
        </Col>
        <Col xs={12} md={1} className="mb-2 mb-md-0">
          <Badge bg={employee.isEmployed ? "success" : "danger"}>
            {employee.isEmployed ? "Employed" : "Unemployed"}
          </Badge>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmployeeListItem;
