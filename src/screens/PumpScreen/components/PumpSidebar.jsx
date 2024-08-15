// Sidebar.jsx
import React, { useEffect, useState } from "react";
import {
  Col,
  Image,
  FormGroup,
  Form,
  Button,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
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
        color: "#000",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(0, 0, 128, 0.4)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(127, 0, 255, 0.4)",
          zIndex: -1,
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        {profileImage && (
          <Image
            src={profileImage}
            alt="Profile"
            style={{
              height: "100px",
              borderRadius: "50%",
              marginBottom: "1rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        )}
        {addManagerApi.error && (
          <Alert variant="danger" dismissible>
            {addManagerApi.error} {addManagerApi.errorStatus}:{" "}
            {addManagerApi.responseProblem}
          </Alert>
        )}
        {addManagerApi.data && (
          <Alert variant="success">Manager Added Successfully</Alert>
        )}
        <h3 style={{ marginBottom: "0.5rem" }}>
          {addManagerApi.data?.managerName?.charAt(0).toUpperCase() +
            addManagerApi.data?.managerName?.slice(1) ||
            pump.manager?.name?.charAt(0).toUpperCase() +
              pump.manager?.name?.slice(1) ||
            "No Manager Found"}
        </h3>
      </div>

      <h4 style={{ marginBottom: "1rem", color: COLORS.primary }}>
        {pump?.manager?.name ? "" : "Add Manager"}
      </h4>

      <Button
        className="w-100"
        variant="outline-light"
        onClick={() => setAddManagerViaEmail(!addManagerViaEmail)}
      >
        {addManagerViaEmail ? "Hide Form" : "Add Manager via Email"}
      </Button>

      {addManagerViaEmail && (
        <Form onSubmit={handleAddManager} className="justify-content-start">
          <FormGroup className="mt-4">
            <InputGroup>
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                value={managerEmail}
                placeholder="Enter email"
                required
                onChange={(e) => setManagerEmail(e.target.value)}
              />
            </InputGroup>
            <Button
              variant="outline-light"
              className="w-100 mt-4"
              type="submit"
            >
              Add Manager
            </Button>
          </FormGroup>
        </Form>
      )}

      <Button
        variant="outline-light"
        className="mt-4 w-100"
        onClick={() => setShowAddEmployeeForm(!showAddEmployeeForm)}
      >
        {showAddEmployeeForm ? "Show Employees" : "Add Employee"}
      </Button>

      <Button
        className="mt-4 w-100"
        variant="outline-light"
        onClick={() => navigate("/home")}
      >
        Back to Pumps List
      </Button>
    </Col>
  );
};

export default PumpSidebar;
