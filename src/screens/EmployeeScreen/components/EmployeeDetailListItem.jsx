import React from "react";
import { ListGroup, Card, Badge, Row, Col, Image } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaGasPump,
  FaTimesCircle,
} from "react-icons/fa";
import profileImage from "../../../assets/images/profile.png";

const EmployeeDetailListItem = ({ employee }) => {
  console.log(employee);
  return (
    <Card
      className="p-4 mb-4"
      style={{
        borderRadius: "15px",
        background:
          "linear-gradient(135deg, rgba(78, 84, 200, 0.4), rgba(143, 148, 251, 0.4))",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Row className="align-items-center mb-4 w-100">
        <Col xs={12} md={12}>
          <h4 className="text-center mb-4">Employee Details</h4>
          <ListGroup>
            <ListGroup.Item>
              <FaUser className="me-2" />
              <strong>Name:</strong> {employee.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <FaEnvelope className="me-2" />
              <strong>Email:</strong> {employee.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <FaPhone className="me-2" />
              <strong>Phone Number:</strong> {employee.phoneNumber}
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <FaGasPump className="me-2" />
              <strong>Pump ID:</strong> {employee.pumpId}
            </ListGroup.Item> */}
            <ListGroup.Item>
              <strong>Verified:</strong>
              {employee.isVerified ? (
                <Badge bg="success" className="ms-2">
                  <FaCheckCircle className="me-1" /> Yes
                </Badge>
              ) : (
                <Badge bg="danger" className="ms-2">
                  <FaTimesCircle className="me-1" /> No
                </Badge>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default EmployeeDetailListItem;
