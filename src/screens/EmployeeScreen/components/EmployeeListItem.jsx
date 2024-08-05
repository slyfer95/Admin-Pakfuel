import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EmployeeListItem = ({ employee }) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item
      onClick={() => navigate("/employee", { state: { employee } })}
      as="li"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{employee.name}</span>
      <span>{employee.email}</span>
      <span>{employee.phoneNumber}</span>
    </ListGroup.Item>
  );
};

export default EmployeeListItem;
