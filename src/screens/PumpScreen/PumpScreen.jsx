// PumpScreen.jsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../assets/images/profile.png";
import pso from "../../assets/images/pso.png";
import PumpSidebar from "./components/PumpSidebar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import PumpDetails from "./components/PumpDetails";
import EmployeeList from "./components/EmployeeList";
import EmployeeCard from "./components/EmployeeCard";

const PumpScreen = () => {
  const employees = [
    {
      id: 1,
      name: "John Dillinger",
      email: "john@gmail.com",
      organization: "PSO",
      image: profile,
    },
    {
      id: 2,
      name: "Melvin Purvis",
      location: "melvin-purvis@gmail.com",
      organization: "BYCO",
      image: profile,
    },
    {
      id: 3,
      name: "Patrick Bateman",
      email: "patrick@gmail.com",
      organization: "Caltex",
      image: profile,
    },
    {
      id: 4,
      name: "Hans Landa",
      email: "hans@gmail.com",
      organization: "Shell",
      image: profile,
    },
    {
      id: 5,
      name: "Calvin Candie",
      location: "calvin@gmail.com",
      organization: "Atock",
      image: profile,
    },
    {
      id: 7,
      name: "John S. Fitzgerald",
      email: "fitzgerald@gmail.com",
      organization: "Hascol",
      image: profile,
    },
  ];

  const [pump, setPump] = useState({
    name: "PSO",
    image: pso,
    location: "Location A",
    manager: "Manager Khan",
    organization: "PSO",
    status: "active",
    lastUpdated: "2022-01-01",
    employees: [
      { name: "John", isVerified: "Verified" },
      { name: "Elton", isVerified: "Not Verified" },
      { name: "Ricky", isVerified: "Verified" },
    ],
  });

  // const [selectedPump, setSelectedPump] = useState(pump);
  const [manager, setManager] = useState(pump.manager);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [showChangeManager, setShowChangeManager] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pumpId: pump.name,
    isVerified: false,
  });

  const handleAddManager = (manager) => {
    if (pump.manager === manager) {
      const updatedPump = { ...pump, manager: "" };
      setPump(updatedPump);
    } else {
      const updatedPump = { ...pump, manager };
      setPump(updatedPump);
    }
    setManager(pump.manager === manager ? "" : manager);
  };

  const handleChangeManager = () => {
    setShowChangeManager(!showChangeManager);
  };

  const handleRemoveEmployee = (index) => {
    const updatedEmployees = [...pump.employees];
    updatedEmployees.splice(index, 1);
    const updatedPump = { ...pump, employees: updatedEmployees };
    setPump(updatedPump);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleAddEmployee = () => {
    const updatedPump = {
      ...pump,
      employees: [...pump.employees, formValues.name],
    };
    setPump(updatedPump);

    setShowAddEmployeeForm(false);
    setFormValues({
      name: "",
      email: "",
      phoneNumber: "",
      pumpId: pump.name,
      isVerified: false,
    });
  };

  return (
    <Container fluid>
      <Row>
        <PumpSidebar
          pump={pump}
          manager={manager}
          setManager={setManager}
          handleChangeManager={handleChangeManager}
          showChangeManager={showChangeManager}
          showAddEmployeeForm={showAddEmployeeForm}
          setShowAddEmployeeForm={setShowAddEmployeeForm}
        />

        <Col
          style={{
            flex: 3,
          }}
        >
          <PumpDetails pump={pump} />

          {showChangeManager && (
            <Row className="justify-content-center">
              {employees.map((employee, index) => (
                <Col
                  xs={12}
                  md={4}
                  key={index}
                  className="mb-3"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmployeeCard
                    employee={employee}
                    handleAddManager={handleAddManager}
                    manager={manager}
                    pump={pump}
                  />
                </Col>
              ))}
            </Row>
          )}

          {showAddEmployeeForm && (
            <AddEmployeeForm
              formValues={formValues}
              handleFormChange={handleFormChange}
              handleAddEmployee={handleAddEmployee}
              setFormValues={setFormValues}
            />
          )}

          {!showAddEmployeeForm && !showChangeManager && (
            <EmployeeList
              pump={pump}
              handleRemoveEmployee={handleRemoveEmployee}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PumpScreen;
