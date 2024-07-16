import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { COLORS } from "../../../constants/constants";

const SearchFilterPanel = ({
  searchTerm,
  searchBy,
  filterOrg,
  setSearchTerm,
  setSearchBy,
  setFilterOrg,
  showAddPumpForm,
  setShowAddPumpForm,
}) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchByChange = (e) => setSearchBy(e.target.value);
  const handleFilterChange = (e) => setFilterOrg(e.target.value);

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
      <h3>Search and Filter</h3>
      <Form.Group controlId="searchBar" className="mb-3">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Search by ${searchBy}`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
      <Form.Group controlId="searchBy" className="mb-3">
        <Form.Label>Search By</Form.Label>
        <Form.Control
          as="select"
          value={searchBy}
          onChange={handleSearchByChange}
        >
          <option value="ID">ID</option>
          <option value="location">Location</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="filterOrg" className="mb-3">
        <Form.Label>Filter by Organization</Form.Label>
        <Form.Control
          as="select"
          value={filterOrg}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="PSO">PSO</option>
          <option value="BYCO">BYCO</option>
          <option value="Hascol">HASCOL</option>
          <option value="Atock">ATOCK</option>
          <option value="Caltex">CALTEX</option>
          <option value="Shell">SHELL</option>
        </Form.Control>
      </Form.Group>
      <Row>
        <Button
          variant="light"
          onClick={() => {
            setSearchTerm("");
            setFilterOrg("");
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
    </Col>
  );
};

export default SearchFilterPanel;
