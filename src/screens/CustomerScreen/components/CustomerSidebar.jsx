import React from "react";
import { Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../constants/constants";

const CustomerSidebar = () => {
  const navigate = useNavigate();

  return (
    <Col
      xs={12}
      md={3}
      className="d-flex flex-column align-items-center p-4"
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button className="mt-4 w-100" variant="light">
        Back to Dashboard
      </Button>
    </Col>
  );
};

export default CustomerSidebar;
