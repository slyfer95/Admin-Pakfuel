import React from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ employees }) => {
  return (
    <Col>
      <Card
        style={{
          textAlign: "center",
          padding: "1rem",
          height: "100%",
          borderRadius: "8px",
          backgroundColor: COLORS.secondary,
        }}
      >
        <Col>
          <h4 style={{ textAlign: "center" }}>Employee List</h4>
          {employees.length !== 0 ? (
            <ListGroup as="ul">
              {employees.map((employee, index) => (
                <EmployeeListItem key={index} employee={employee} />
              ))}
            </ListGroup>
          ) : (
            <h4>No Employees Found</h4>
          )}
        </Col>
      </Card>
    </Col>
  );
};

export default EmployeeList;
