import React, { useEffect } from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import useApi from "../../../hooks/useApi";
import adminApis from "../../../api/admin";

const EmployeeListItem = ({ employee }) => {
  const navigate = useNavigate();

  return (
    <ListGroup.Item
      action
      onClick={() => navigate("/employee", { state: { employee } })}
      className="py-3 px-4 border-0 border-bottom"
    >
      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <h5 className="mb-0 d-flex align-items-center">
            <FaUser className="me-2" />
            {employee.name.charAt(0).toUpperCase() + employee.name.slice(1)}
          </h5>
        </Col>
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaEnvelope className="me-2" />
            {employee.email}
          </span>
        </Col>
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaPhone className="me-2" />
            {employee.phoneNumber}
          </span>
        </Col>
        <Col xs={12} md={1} className="text-md-end">
          <Badge bg="primary" pill>
            Details
          </Badge>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmployeeListItem;
