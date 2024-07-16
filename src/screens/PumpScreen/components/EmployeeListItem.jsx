import React from "react";
import { ListGroup } from "react-bootstrap";

const EmployeeListItem = ({ employee, handleEmployeeClick }) => {
  return (
    <ListGroup.Item
      as="li"
      onClick={() => handleEmployeeClick(employee)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{employee.name}</span>
      <p>{employee.isVerified}</p>
    </ListGroup.Item>
  );
};

export default EmployeeListItem;
