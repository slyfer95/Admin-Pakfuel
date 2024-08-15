import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import { FaUser, FaHome, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { COLORS } from "../constants/constants.js";
import { AppContext } from "../context/context";
import authApi from "../api/auth.js";

const Header = () => {
  const { user, setUser } = useContext(AppContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      setShowLogoutModal(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <header>
      <Navbar
        style={{ backgroundColor: COLORS.tertiary }}
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={logo}
              alt="PAKFUEL"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <span className="d-none d-sm-inline">PAKFUEL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link as={NavLink} to="/home">
                    <FaHome /> <span className="d-none d-md-inline">Home</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/employee-list">
                    <FaUsers />{" "}
                    <span className="d-none d-md-inline">Employees</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/customer-list">
                    <MdPerson />{" "}
                    <span className="d-none d-md-inline">Customers</span>
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowLogoutModal(true)}>
                    <FaSignOutAlt />{" "}
                    <span className="d-none d-md-inline">Sign Out</span>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <FaUser /> <span className="d-none d-md-inline">Sign In</span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: COLORS.primary, color: "#000" }}
        >
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: COLORS.secondary, color: "#000" }}
        >
          Are you sure you want to log out?
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: COLORS.secondary }}>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
