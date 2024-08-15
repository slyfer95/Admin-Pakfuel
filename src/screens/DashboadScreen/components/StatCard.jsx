import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const StatCard = ({ title, value }) => {
  return (
    <Card
      style={{
        textAlign: "center",
        padding: "1rem",
        height: "100%",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        color: COLORS.primary,
      }}
    >
      <h4>{title}</h4>
      {value && <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</p>}
      {!value && (
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Loading...</p>
      )}
    </Card>
  );
};

export default StatCard;
