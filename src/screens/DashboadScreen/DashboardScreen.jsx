import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Pagination,
  Spinner,
  Button,
} from "react-bootstrap";
import { COLORS } from "../../constants/constants.js";
import ProfileCard from "./components/ProfileCard.jsx";
import StatCard from "./components/StatCard.jsx";
import SearchFilterPanel from "./components/SearchFilterPanel.jsx";
import PumpCard from "./components/PumpCard.jsx";
import usePumpsList from "../../hooks/usePumpsList.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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
              refreshPumpList={refreshPumpList}
            />
          </Row>
          <Row className="mt-3">
            <Button
              variant="outline-light"
              onClick={() => navigate("/addpump")}
            >
              Add Pump
            </Button>
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
          <Row className="mb-3 mt-3">
            <Col xs={12} md={6} className="mb-3">
              <StatCard
                title="Total Number of Fuel Pumps"
                value={noPumps ? noPumps.toString() : null}
                color={COLORS.primary}
              />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <StatCard
                title="Total Number of Employees"
                value={noPumps ? noEmployees.toString() : null}
                color="#fff"
              />
            </Col>
          </Row>

          <Row className="justify-content-center ">
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
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
