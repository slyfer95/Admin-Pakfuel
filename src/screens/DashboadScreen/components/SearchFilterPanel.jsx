import React from "react";
import { Col, Form, Button, Row, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Import search icon
import { useNavigate } from "react-router-dom";

const SearchFilterPanel = ({ searchTerm, setSearchTerm, refreshPumpList }) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const navigate = useNavigate();

  return (
    <Col
      xs={12}
      md={3}
      style={{
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        color: "#fff",
        padding: "2rem",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <h3>Search</h3>
      <Form.Group controlId="searchBar" className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder={`Search Pump`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      {/* <Row>
        <Button
          variant="outline-light"
          onClick={() => {
            setSearchTerm("");
          }}
        >
          Reset
        </Button>
      </Row> */}
      <Row className="mt-3">
        <Button variant="outline-light" onClick={() => navigate("/add-pump")}>
          {"Add Pump"}
        </Button>
      </Row>
      <Row className="mt-3">
        <Button variant="outline-light" onClick={() => refreshPumpList()}>
          Refresh Pump List
        </Button>
      </Row>
    </Col>
  );
};

export default SearchFilterPanel;
