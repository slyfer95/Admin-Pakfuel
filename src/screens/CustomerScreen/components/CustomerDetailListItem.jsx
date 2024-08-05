import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { COLORS } from "../../../constants/constants";

const CustomerDetailListItem = ({ customer }) => {
  return (
    <ListGroup as="ul" style={{ backgroundColor: COLORS.secondary }}>
      <ListGroup.Item as="li">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Customer Details
        </h4>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Phone Number:</strong> {customer.phoneNumber}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Balance:</strong> {customer.balance}
        </p>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <p>
          <strong>Verification: </strong>
          {customer.isVerified ? "Verified" : "Not Verified"}
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CustomerDetailListItem;
