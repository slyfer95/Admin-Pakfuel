import React from "react";
import { Card } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const StatCard = ({ title, value }) => {
  return (
    <Card
      style={{
        textAlign: "center",
        padding: "1rem",
        height: "100%",
        // borderRadius: "8px",
        backgroundColor: COLORS.tertiary,
        color: COLORS.primary,
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</p>
    </Card>
  );
};

export default StatCard;
