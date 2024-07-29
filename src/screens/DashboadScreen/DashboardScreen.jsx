import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Pagination } from "react-bootstrap";
import { COLORS } from "../../constants/constants.js";
import ProfileCard from "./components/ProfileCard.jsx";
import AddPumpForm from "./components/AddPumpForm.jsx";
import StatCard from "./components/StatCard.jsx";
import SearchFilterPanel from "./components/SearchFilterPanel.jsx";
import PumpCard from "./components/PumpCard.jsx";
import usePumpsList from "../../hooks/usePumpsList.js";

const Dashboard = () => {
  const {
    pumps,
    noPumps,
    noEmployees,
    user,
    getProfile,
    getPumpList,
    getStats,
    isError,
    error,
    errorProblem,
    errorStatus,
    refreshPumpList,
    loading,
  } = usePumpsList();

  useEffect(() => {
    getPumpList();
    getProfile();
    getStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddPumpForm, setShowAddPumpForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredPumps =
    pumps && searchTerm
      ? pumps.filter((pump) => pump.name.toString().includes(searchTerm))
      : pumps || [];

  const indexOfLastPump = currentPage * itemsPerPage;
  const indexOfFirstPump = indexOfLastPump - itemsPerPage;
  const currentPumps = filteredPumps.slice(indexOfFirstPump, indexOfLastPump);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              setSearchTerm={setSearchTerm}
              setShowAddPumpForm={setShowAddPumpForm}
              showAddPumpForm={showAddPumpForm}
              refreshPumpList={refreshPumpList}
            />
          </Row>
        </Col>
        <Col xs={12} md={9} style={{ flex: 3 }}>
          {isError && (
            <Row className="mb-3">
              <Col>
                <Alert variant="danger">
                  {errorProblem} {errorStatus}: {error}
                </Alert>
              </Col>
            </Row>
          )}
          <Row className="mb-3">
            <Col>
              <StatCard
                title="Total Number of Fuel Pumps"
                value={noPumps ? noPumps.toString() : "Loading..."}
                color={COLORS.primary}
              />
            </Col>
            <Col>
              <StatCard
                title="Total Number of Employees"
                value={noPumps ? noEmployees.toString() : "Loading..."}
                color="#fff"
              />
            </Col>
          </Row>

          {showAddPumpForm ? (
            <Row className="align-items-center justify-content-center m-3">
              <AddPumpForm />
            </Row>
          ) : (
            <>
              <Row className="justify-content-center ">
                {loading && <h4>Loading...</h4>}
                {currentPumps.map((pump, index) => (
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
              <Row
                style={{
                  position: "fixed",
                  bottom: "1rem",
                  right: "1rem",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Pagination>
                  {Array.from(
                    { length: Math.ceil(filteredPumps.length / itemsPerPage) },
                    (_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    )
                  )}
                </Pagination>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
