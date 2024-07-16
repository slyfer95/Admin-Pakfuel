// Sidebar.jsx
import React, { useState } from "react";
import { Col, Image, FormGroup, Form, Button } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import profileImage from "../../../assets/images/profile.png";

const PumpSidebar = ({
  pump,
  handleChangeManager,
  showChangeManager,
  showAddEmployeeForm,
  setShowAddEmployeeForm,
}) => {
  const [addManagerViaEmail, setAddManagerViaEmail] = useState(false);

  return (
    <Col
      xs={12}
      md={3}
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "2rem",
        flex: 1,
        // width: "100%",
        height: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Image
          src={profileImage}
          alt="Profile"
          style={{
            height: "100px",
            borderRadius: "50%",
            marginBottom: "1rem",
          }}
        />
        <h3 style={{ marginBottom: "0.5rem" }}>{pump.manager}</h3>
        <p>Pump: {pump.location}</p>
      </div>

      <h4 style={{ marginBottom: "1rem" }}>
        {pump.manager ? "" : "Add Manager"}
      </h4>

      <Button
        className="w-100 mb-4"
        variant="light"
        onClick={() => setAddManagerViaEmail(!addManagerViaEmail)}
      >
        {addManagerViaEmail ? "Hide Form" : "Add Manager via Email"}
      </Button>

      {addManagerViaEmail && (
        <FormGroup className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Button
            variant="light"
            className="w-100 mt-4"
            type="submit"
            onClick={() => setAddManagerViaEmail(!addManagerViaEmail)}
          >
            Sent Email
          </Button>
        </FormGroup>
      )}

      <Button className="w-100" variant="light" onClick={handleChangeManager}>
        {showChangeManager
          ? "Back to Pump Screen"
          : pump.manager
          ? "Change Manager"
          : "Add Manager"}
      </Button>

      <Button
        variant="light"
        className="mt-4 w-100"
        onClick={() => setShowAddEmployeeForm(!showAddEmployeeForm)}
      >
        {showAddEmployeeForm ? "Show Employees" : "Add Employee"}
      </Button>
    </Col>
  );
};

export default PumpSidebar;
