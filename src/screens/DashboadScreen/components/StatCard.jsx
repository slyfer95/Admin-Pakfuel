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
        backgroundColor: COLORS.tertiary,
        color: COLORS.primary,
      }}
    >
      <h4>{title}</h4>
      {value && <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</p>}
      {!value && <Spinner />}
    </Card>
  );
};

export default StatCard;
