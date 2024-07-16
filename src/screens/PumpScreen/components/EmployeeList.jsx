// EmployeeList.jsx
import React from "react";
import { Col, Card, Row, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import EmployeeListItem from "./EmployeeListItem";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ pump, handleRemoveEmployee }) => {
  const navigate = useNavigate();

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
          <ListGroup as="ul">
            {pump.employees.map((employee, index) => (
              <EmployeeListItem
                key={index}
                employee={employee}
                index={index}
                handleRemoveEmployee={() => handleRemoveEmployee(index)}
                handleEmployeeClick={() => {
                  navigate("/employee");
                }}
              />
            ))}
          </ListGroup>
        </Col>
      </Card>
    </Col>
  );
};

export default EmployeeList;
