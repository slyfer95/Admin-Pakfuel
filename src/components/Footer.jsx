import React from "react";
import { Container } from "react-bootstrap";
import { COLORS } from "../constants/constants";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return location.pathname === "/home" ? (
    <footer
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "1rem 0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Container>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          PAKFUEL &copy; {currentYear}
        </p>
      </Container>
    </footer>
  ) : null;
};

export default Footer;
