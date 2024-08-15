import React, { useState, useEffect } from "react";
import {
  Alert,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import EmployeeList from "./components/EmployeeList";
import adminApis from "../../api/admin";
import useApi from "../../hooks/useApi";

const EmployeeListScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const getAllEmployeeListApi = useApi(adminApis.getAllEmployeeList);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEmployees = async () => {
    setLoading(true);
    setError(null);
    await getAllEmployeeListApi.request();
    setLoading(false);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    if (getAllEmployeeListApi.data) {
      setEmployees(getAllEmployeeListApi.data.employees);
      console.log("Employee list fetched successfully");
    }
    if (getAllEmployeeListApi.error) {
      setError(getAllEmployeeListApi.error);
      console.error(
        "Failed to fetch Employee list",
        getAllEmployeeListApi.error
      );
    }
  }, [getAllEmployeeListApi.data, getAllEmployeeListApi.error]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees?.filter((employee) =>
    ["name", "email", "phoneNumber"].some((key) =>
      employee[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={9} lg={12}>
          <Form className="mb-4">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search by name, email, or phone number"
                value={searchTerm}
                onChange={handleSearch}
                // className="shadow-sm"
              />

              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && (
            <Alert variant="danger" dismissible>
              Failed to fetch Employee list: {error.message}
            </Alert>
          )}

          {!loading && !error && <EmployeeList employees={filteredEmployees} />}
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeListScreen;
