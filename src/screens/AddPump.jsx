import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Card, Alert, Row } from "react-bootstrap";
import adminApis from "../api/admin";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import { COLORS } from "../constants/constants";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const AddPump = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [corporation, setCorporation] = useState("");
  const mapContainerRef = useRef(null);

  const addPumpApi = useApi(adminApis.addPump);
  useEffect(() => {
    if (addPumpApi.data) {
      console.log("Pump added successfully");
    }
    if (addPumpApi.error) {
      console.error("Failed to add pump", addPumpApi.responseProblem);
    }
  }, [addPumpApi.error, addPumpApi.data]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [67.01715594140774, 30.195862875675786],
      zoom: 12,
    });

    map.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      setCoordinates({ latitude: lat, longitude: lng });
    });

    return () => map.remove();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPumpApi.request(name, corporation, location, coordinates);
    navigate(0);
  };

  return (
    <Card
      style={{
        padding: "2rem",
        borderRadius: "8px",
        backgroundColor: COLORS.secondary,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
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
        <Form.Group controlId="pumpCorporation">
          <Form.Label>Corporation</Form.Label>
          <Form.Control
            as="select"
            required
            value={corporation}
            onChange={(e) => setCorporation(e.target.value)}
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <option value="">Select Corporation</option>
            <option value="PSO">PSO</option>
            <option value="BYCO">BYCO</option>
            <option value="CALTEX">CALTEX</option>
            <option value="ATTOCK">ATTOCK</option>
            <option value="HASCOL">HASCOL</option>
            <option value="SHELL">SHELL</option>
          </Form.Control>
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
        <Form.Group controlId="pumpCoordinates">
          <Form.Label>Coordinates</Form.Label>
          <p>
            Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
          </p>
        </Form.Group>
        <div
          style={{ height: "400px", marginBottom: "1rem" }}
          ref={mapContainerRef}
        />
        <Row className="justify-content-end">
          <Button type="submit" className="w-25" variant="outline-primary">
            Add Pump
          </Button>
        </Row>
      </Form>
    </Card>
  );
};

export default AddPump;
