import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const SearchFilterPanel = ({
  searchTerm,
  setSearchTerm,
  showAddPumpForm,
  setShowAddPumpForm,
  refreshPumpList,
}) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <Col
      xs={12}
      md={3}
      style={{
        backgroundColor: COLORS.tertiary,
        color: "#fff",
        padding: "2rem",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <h3>Search</h3>
      <Form.Group controlId="searchBar" className="mb-3">
        <Form.Control
          type="text"
          placeholder={`Search Pump`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <Row>
        <Button
          variant="light"
          onClick={() => {
            setSearchTerm("");
          }}
        >
          Reset
        </Button>
      </Row>
      <Row className="mt-3">
        <Button
          variant="light"
          onClick={() => setShowAddPumpForm(!showAddPumpForm)}
        >
          {showAddPumpForm ? "Show Pumps" : "Add Pump"}
        </Button>
      </Row>
      <Row className="mt-3">
        <Button variant="light" onClick={() => refreshPumpList()}>
          Refresh Pump List
        </Button>
      </Row>
    </Col>
  );
};

export default SearchFilterPanel;
