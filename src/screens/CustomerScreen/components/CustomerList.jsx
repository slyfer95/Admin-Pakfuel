import React from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import CustomerListItem from "./CustomerListItem";

const CustomerList = ({ customers }) => {
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
          <h4 style={{ textAlign: "center" }}>Customer List</h4>
          {customers.length !== 0 ? (
            <ListGroup as="ul">
              {customers.map((customer, index) => (
                <CustomerListItem key={index} customer={customer} />
              ))}
            </ListGroup>
          ) : (
            <h4>No Customers Found</h4>
          )}
        </Col>
      </Card>
    </Col>
  );
};

export default CustomerList;
