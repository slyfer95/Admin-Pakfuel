import React from "react";
import { Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../constants/constants";

const EmployeeSidebar = () => {
  const navigate = useNavigate();

  return (
    <Col
      xs={12}
      md={3}
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "2rem",
        flex: 1,
        height: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button
        className="mt-4 w-100"
        variant="light"
        onClick={() => navigate("/home")}
      >
        Back to Dashboard
      </Button>
    </Col>
  );
};

export default EmployeeSidebar;
