import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Spinner,
  Alert,
} from "react-bootstrap";
import CustomerSidebar from "./components/CustomerSidebar";
import CustomerList from "./components/CustomerList";
import adminApis from "../../api/admin";
import useApi from "../../hooks/useApi";

const CustomerListScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const getCustomerListApi = useApi(adminApis.getCustomerList);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCustomer = async () => {
    setLoading(true);
    setError(null);
    await getCustomerListApi.request();
    setLoading(false);
  };

  useEffect(() => {
    getCustomer();
  }, []);

  useEffect(() => {
    if (getCustomerListApi.data) {
      setCustomers(getCustomerListApi.data.customers);
      console.log(
        "Customer list fetched successfully",
        getCustomerListApi.data.customers
      );
    }
    if (getCustomerListApi.error) {
      setError(getCustomerListApi.error);
      console.error("Failed to fetch customer list", getCustomerListApi.error);
    }
  }, [getCustomerListApi.data, getCustomerListApi.error]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers?.filter((customer) =>
    ["name", "email", "phoneNumber"].some((key) =>
      customer[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container fluid>
      <Row>
        <CustomerSidebar />

        <Col style={{ flex: 3 }}>
          <Form className="my-3">
            <FormControl
              type="text"
              placeholder="Search by name, email, or phone number"
              className="mr-sm-2"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          )}

          {error && (
            <Alert variant="danger">
              Failed to fetch customer list: {error.message}
            </Alert>
          )}

          {!loading && !error && <CustomerList customers={filteredCustomers} />}
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerListScreen;
