import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomerListItem = ({ customer }) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item
      onClick={() => navigate("/customer", { state: { customer } })}
      as="li"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{customer.name}</span>
      <span>{customer.email}</span>
      <span>{customer.phoneNumber}</span>
    </ListGroup.Item>
  );
};

export default CustomerListItem;
