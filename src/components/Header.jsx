import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { COLORS } from "../constants/constants.js";
import { AppContext } from "../context/context"; // Adjust the path if necessary
import Cookies from "js-cookie";

import authApi from "../api/auth.js";

const Header = () => {
  const { user, setUser } = useContext(AppContext);

  const confirmLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      handleLogout();
    }
  };

  const handleLogout = async () => {
    setUser(null);
    await authApi.logout();
  };

  return (
    <header>
      <Navbar
        style={{ backgroundColor: COLORS.tertiary }}
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand to="/">
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="proShop"
                style={{ width: "15%", marginRight: "5%" }}
              />
              <h2 style={{ alignSelf: "center" }}>PAKFUEL</h2>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/employee-list" className="nav-link">
                    Employees List
                  </NavLink>
                  <NavLink to="/customer-list" className="nav-link">
                    Customers List
                  </NavLink>
                  <NavLink
                    to="/"
                    className="nav-link"
                    onClick={() => confirmLogOut()}
                  >
                    Sign Out
                  </NavLink>
                </>
              ) : (
                <NavLink to="/login" className="nav-link">
                  <FaUser /> Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
