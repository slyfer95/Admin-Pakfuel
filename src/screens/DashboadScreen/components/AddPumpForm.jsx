import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const AddPumpForm = ({ handleAddPump, newPump, setNewPump }) => {
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
      <Form>
        <Form.Group controlId="pumpName">
          <Form.Label>Pump Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pump Name"
            value={newPump.name}
            onChange={(e) => setNewPump({ ...newPump, name: e.target.value })}
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pump Location"
            value={newPump.location}
            onChange={(e) =>
              setNewPump({ ...newPump, location: e.target.value })
            }
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpManager">
          <Form.Label>Manager</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Manager's Email"
            value={newPump.manager}
            onChange={(e) =>
              setNewPump({ ...newPump, manager: e.target.value })
            }
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Form.Group controlId="pumpOrganization">
          <Form.Label>Organization</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Organization"
            value={newPump.organization}
            onChange={(e) =>
              setNewPump({ ...newPump, organization: e.target.value })
            }
            style={{
              borderRadius: "8px",
              padding: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Group>
        <Button
          onClick={handleAddPump}
          style={{
            backgroundColor: COLORS.tertiary,
            color: COLORS.primary,
            width: "100%",
          }}
        >
          Add Pump
        </Button>
      </Form>
    </Card>
  );
};

export default AddPumpForm;
