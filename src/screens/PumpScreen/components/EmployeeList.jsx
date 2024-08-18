// EmployeeList.jsx
import React from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import EmployeeListItem from "./EmployeeListItem";

// import { useNavigate } from "react-router-dom";

const EmployeeList = ({ pump }) => {
  // const navigate = useNavigate();

  return (
    <Col>
      <Card
        style={{
          textAlign: "center",
          padding: "1rem",
          height: "100%",
          borderRadius: "15px",
          background:
            "linear-gradient(135deg, rgba(78, 84, 200, 0.4), rgba(143, 148, 251, 0.4))",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          color: "#444",
        }}
      >
        <Col>
          <Card.Header as={"h5"}>Employee List</Card.Header>
          {pump.employees.length !== 0 ? (
            <ListGroup
              as="ul"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              {pump.employees.map((employee, index) => (
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
