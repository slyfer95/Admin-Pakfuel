import React from "react";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import CustomerListItem from "./CustomerListItem";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const CustomerList = ({ customers }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        borderRadius: "15px",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Body>
        <Row className="align-items-center mb-4">
          <Col xs={12} md={4} className="text-start">
            <Button
              variant="link"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => navigate("/home")}
            >
              <FaChevronLeft /> Back to Dashboard
            </Button>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h4>Customer List</h4>
          </Col>
        </Row>
        {customers.length !== 0 ? (
          <ListGroup variant="flush" style={{ borderRadius: "15px" }}>
            {customers.map((customer, index) => (
              <CustomerListItem key={index} customer={customer} />
            ))}
          </ListGroup>
        ) : (
          <h5 className="text-center text-muted">No Customers Found</h5>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomerList;
