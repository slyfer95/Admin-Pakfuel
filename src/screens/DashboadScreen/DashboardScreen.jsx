import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/context.js";
import { COLORS } from "../../constants/constants.js";
import ProfileCard from "./components/ProfileCard.jsx";
import AddPumpForm from "./components/AddPumpForm.jsx";
import StatCard from "./components/StatCard.jsx";
import SearchFilterPanel from "./components/SearchFilterPanel.jsx";
import PumpCard from "./components/PumpCard.jsx";
import pso from "../../assets/images/pso.png";
import byco from "../../assets/images/byco.jpeg";
import caltex from "../../assets/images/caltex.png";
import atock from "../../assets/images/atock.png";
import shell from "../../assets/images/shell.png";
import hascol from "../../assets/images/hascol.png";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  const pumps = [
    {
      id: 1,
      name: "PSO",
      location: "Location A",
      organization: "PSO",
      image: pso,
    },
    {
      id: 2,
      name: "BYCO",
      location: "Location B",
      organization: "BYCO",
      image: byco,
    },
    {
      id: 3,
      name: "Caltex",
      location: "Location C",
      organization: "Caltex",
      image: caltex,
    },
    {
      id: 4,
      name: "Shell",
      location: "Location D",
      organization: "Shell",
      image: shell,
    },
    {
      id: 5,
      name: "Atock",
      location: "Location E",
      organization: "Atock",
      image: atock,
    },
    {
      id: 7,
      name: "Atock New",
      location: "Location G",
      organization: "Atock",
      image: atock,
    },
    {
      id: 6,
      name: "Hascol",
      location: "Location F",
      organization: "Hascol",
      image: hascol,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("ID");
  const [filterOrg, setFilterOrg] = useState("");
  const [showAddPumpForm, setShowAddPumpForm] = useState(false);

  const [newPump, setNewPump] = useState({
    name: "",
    location: "",
    manager: "",
    organization: "",
  });

  const handleAddPump = () => {
    pumps.push({
      ...newPump,
      id: pumps.length + 1,
      image: pso,
    });
    setNewPump({
      name: "",
      location: "",
      manager: "",
      organization: "",
    });
    setShowAddPumpForm(false);
  };

  const filteredPumps = pumps.filter((pump) => {
    if (filterOrg && pump.organization !== filterOrg) return false;
    if (searchBy === "ID") return pump.id.toString().includes(searchTerm);
    if (searchBy === "location")
      return pump.location.toLowerCase().includes(searchTerm.toLowerCase());
    return true;
  });

  return (
    <Container fluid>
      <Row style={{ margin: 0, width: "100%" }}>
        <Col xs={12} md={3} style={{ flex: 1 }}>
          <Row className="mb-4">
            <ProfileCard user={user} />
          </Row>
          <Row>
            <SearchFilterPanel
              searchTerm={searchTerm}
              searchBy={searchBy}
              filterOrg={filterOrg}
              setSearchTerm={setSearchTerm}
              setSearchBy={setSearchBy}
              setFilterOrg={setFilterOrg}
              setShowAddPumpForm={setShowAddPumpForm}
              showAddPumpForm={showAddPumpForm}
            />
          </Row>
        </Col>
        <Col xs={12} md={9} style={{ flex: 3 }}>
          <Row className="mb-3">
            <Col>
              <StatCard
                title="Total Number of Fuel Pumps"
                value="50"
                color={COLORS.primary}
              />
            </Col>
            <Col>
              <StatCard
                title="Total Number of Employees"
                value="200"
                color="#fff"
              />
            </Col>
          </Row>

          {showAddPumpForm ? (
            <Row className="align-items-center justify-content-center m-3">
              <AddPumpForm
                showAddPumpForm={showAddPumpForm}
                setShowAddPumpForm={setShowAddPumpForm}
                handleAddPump={handleAddPump}
                newPump={newPump}
                setNewPump={setNewPump}
              />
            </Row>
          ) : (
            <Row className="justify-content-center">
              {filteredPumps.map((pump, index) => (
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
                  <PumpCard pump={pump} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
