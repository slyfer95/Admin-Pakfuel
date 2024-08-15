import React, { useEffect } from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import useApi from "../../../hooks/useApi";
import adminApis from "../../../api/admin";

const EmployeeListItem = ({ employee, pumpId }) => {
  const removeEmployeeApi = useApi(adminApis.removeEmployeeFromPump);
  const navigate = useNavigate();

  const handleDeleteEmployee = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );
    if (confirmDelete) {
      await removeEmployeeApi.request(employee.email, pumpId);
      navigate(0);
    }
  };

  useEffect(() => {
    if (removeEmployeeApi.error) {
      console.log(removeEmployeeApi.error);
    }
    if (removeEmployeeApi.data) {
      console.log("Employee deleted successfully");
      navigate(0);
    }
  }, [removeEmployeeApi.data, removeEmployeeApi.error]);
  return (
    <ListGroup.Item
      action
      onClick={() => navigate("/employee", { state: { employee } })}
      className="py-3 px-4 border-0 border-bottom"
    >
      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <h5 className="mb-0 d-flex align-items-center">
            <FaUser className="me-2" />
            {employee.name.charAt(0).toUpperCase() + employee.name.slice(1)}
          </h5>
        </Col>
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaEnvelope className="me-2" />
            {employee.email}
          </span>
        </Col>
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <span className="d-flex align-items-center text-muted">
            <FaPhone className="me-2" />
            {employee.phoneNumber}
          </span>
        </Col>
        <Col xs={12} md={1} className="text-md-end">
          <Badge bg="primary" pill>
            Details
          </Badge>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmployeeListItem;
