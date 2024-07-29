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
          borderRadius: "8px",
          backgroundColor: COLORS.secondary,
        }}
      >
        <Col>
          <h4 style={{ textAlign: "center" }}>Employee List</h4>
          {pump.employees.length !== 0 ? (
            <ListGroup as="ul">
              {pump.employees.map((employee, index) => (
                <EmployeeListItem
                  key={index}
                  employee={employee}
                  pumpId={pump._id}
                />
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
