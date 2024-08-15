import React from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const CustomerListItem = ({ customer }) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item
      action
      onClick={() => navigate("/customer", { state: { customer } })}
      className="py-3 px-4 border-0 border-bottom"
    >
      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <h5 className="mb-0 d-flex align-items-center">
            <FaUser className="me-2" />
            {customer.name.charAt(0).toUpperCase() + customer.name.slice(1)}
          </h5>
        </Col>
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaEnvelope className="me-2" />
            {customer.email}
          </span>
        </Col>
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaPhone className="me-2" />
            {customer.phoneNumber}
          </span>
        </Col>
        <Col xs={12} md={1} className="text-md-end">
          <Badge bg={customer.isVerified ? "success" : "danger"}>
            {customer.isVerified ? "Verified" : "Not Verified"}
          </Badge>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CustomerListItem;
