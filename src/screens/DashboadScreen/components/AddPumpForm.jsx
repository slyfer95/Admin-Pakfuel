import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert, Row } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";
import adminApis from "../../../api/admin";
import useApi from "../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const AddPumpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  const addPumpApi = useApi(adminApis.addPump);

  useEffect(() => {
    if (addPumpApi.data) {
      console.log("Pump added successfully");
    }
    if (addPumpApi.error) {
      console.error("Failed to add pump", addPumpApi.responseProblem);
    }
  }, [addPumpApi.error, addPumpApi.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPumpApi.request(name, location, coordinates);
    navigate(0);
  };

  return (
    <Card
      style={{
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Add New Pump
      </h4>
      {addPumpApi.isError && (
        <Alert variant="danger">
          {addPumpApi.error} {addPumpApi.errorStatus}:{" "}
          {addPumpApi.responseProblem}
        </Alert>
      )}
      {addPumpApi.data && (
        <Alert variant="success">Pump Added Successfully</Alert>
      )}
      {addPumpApi.loading && <Alert variant="info">Loading...</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="pumpName">
          <Form.Label>Pump Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pump Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpLocation" required>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Latitude"
            required
            value={coordinates.latitude}
            onChange={(e) =>
              setCoordinates((prevCoordinates) => ({
                ...prevCoordinates,
                latitude: e.target.value,
              }))
            }
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Longitude"
            required
            value={coordinates.longitude}
            onChange={(e) =>
              setCoordinates((prevCoordinates) => ({
                ...prevCoordinates,
                longitude: e.target.value,
              }))
            }
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Button type="submit" className="w-50" variant="outline-primary">
            Add Pump
          </Button>
        </Row>
      </Form>
    </Card>
  );
};

export default AddPumpForm;
