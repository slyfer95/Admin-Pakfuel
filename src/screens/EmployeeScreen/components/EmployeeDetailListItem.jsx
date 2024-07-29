import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { COLORS } from "../../../constants/constants";

const EmployeeDetailListItem = ({ employee, pumpId }) => {
  return (
    <ListGroup as="ul" style={{ backgroundColor: COLORS.secondary }}>
      <ListGroup.Item as="li">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Employee Details
        </h4>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Name:</strong> {employee.name}
        </p>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Phone Number:</strong> {employee.phoneNumber}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Pump ID:</strong> {pumpId}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Verified:</strong> {employee.isVerified ? "Yes" : "No"}
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default EmployeeDetailListItem;
