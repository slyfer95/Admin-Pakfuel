// Sidebar.jsx
import React, { useEffect, useState } from "react";
import { Col, Image, FormGroup, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import adminApis from "../../../api/admin";
import useApi from "../../../hooks/useApi";
import { COLORS } from "../../../constants/constants";
import profileImage from "../../../assets/images/profile.png";

const PumpSidebar = ({ pump, showAddEmployeeForm, setShowAddEmployeeForm }) => {
  const navigate = useNavigate();
  const [addManagerViaEmail, setAddManagerViaEmail] = useState(false);
  const [managerEmail, setManagerEmail] = useState("");
  const addManagerApi = useApi(adminApis.addManagerToPump);

  const handleAddManager = async (e) => {
    e.preventDefault();
    console.log(pump._id);
    await addManagerApi.request(managerEmail, pump._id);
  };

  useEffect(() => {
    if (addManagerApi.error) {
      console.error("Failed to add manager", addManagerApi.error);
    }
    if (addManagerApi.data) {
      console.log("Manager added successfully");
    }
  }, [addManagerApi.error, addManagerApi.data]);

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
        {profileImage && (
          <Image
            src={profileImage}
            alt="Profile"
            style={{
              height: "100px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        )}
        {addManagerApi.error && (
          <Alert variant="danger">
            {addManagerApi.error} {addManagerApi.errorStatus}:{" "}
            {addManagerApi.responseProblem}
          </Alert>
        )}
        {addManagerApi.data && (
          <Alert variant="success">Manager Added Successfully</Alert>
        )}
        <h3 style={{ marginBottom: "0.5rem" }}>
          {addManagerApi.data?.managerName ||
            pump.manager?.name ||
            "No Manager Found"}
        </h3>
        <p>Pump: {pump.location}</p>
      </div>

      <h4 style={{ marginBottom: "1rem" }}>
        {pump?.manager?.name ? "" : "Add Manager"}
      </h4>

      <Button
        className="w-100"
        variant="light"
        onClick={() => setAddManagerViaEmail(!addManagerViaEmail)}
      >
        {addManagerViaEmail ? "Hide Form" : "Add Manager via Email"}
      </Button>

      {addManagerViaEmail && (
        <Form onSubmit={handleAddManager}>
          <FormGroup className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={managerEmail}
              placeholder="Enter email"
              onChange={(e) => setManagerEmail(e.target.value)}
            />
            <Button variant="light" className="w-100 mt-4" type="submit">
              Add Manager
            </Button>
          </FormGroup>
        </Form>
      )}

      <Button
        variant="light"
        className="mt-4 w-100"
        onClick={() => setShowAddEmployeeForm(!showAddEmployeeForm)}
      >
        {showAddEmployeeForm ? "Show Employees" : "Add Employee"}
      </Button>

      <Button
        className="mt-4 w-100"
        variant="light"
        onClick={() => navigate(-1)}
      >
        Back to Pumps List
      </Button>
    </Col>
  );
};

export default PumpSidebar;
