// PumpScreen.jsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import profile from "../../assets/images/profile.png";
// import pso from "../../assets/images/pso.png";
import PumpSidebar from "./components/PumpSidebar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import PumpDetails from "./components/PumpDetails";
import EmployeeList from "./components/EmployeeList";
// import EmployeeCard from "./components/EmployeeCard";
import { useLocation } from "react-router-dom";

const PumpScreen = () => {
  const location = useLocation();
  const pump = location.state?.pump;

  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  console.log(pump.employees);

  return (
    <Container fluid>
      <Row>
        <PumpSidebar
          pump={pump}
          showAddEmployeeForm={showAddEmployeeForm}
          setShowAddEmployeeForm={setShowAddEmployeeForm}
        />

        <Col
          style={{
            flex: 3,
          }}
        >
          <PumpDetails pump={pump} />

          {showAddEmployeeForm && <AddEmployeeForm pumpId={pump._id} />}

          {!showAddEmployeeForm && <EmployeeList pump={pump} />}
        </Col>
      </Row>
    </Container>
  );
};

export default PumpScreen;
