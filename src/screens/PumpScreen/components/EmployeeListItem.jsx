import React, { useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import adminApis from "../../../api/admin";
import { useNavigate } from "react-router-dom";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListGroup.Item
        as="li"
        onClick={(e) => {
          e.preventDefault();
          navigate("/employee", { state: { employee, pumpId } });
        }}
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{employee.name}</span>
        {/* {console.log(employee)} */}
        <p>{employee.email}</p>
        <p></p>
      </ListGroup.Item>
      <Button variant="danger" onClick={handleDeleteEmployee}>
        Delete
      </Button>
    </div>
  );
};

export default EmployeeListItem;
