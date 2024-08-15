import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NetworkStatus from "./components/NetworkStatus";

const App = () => {
  return (
    <div>
      <Header />
      <NetworkStatus />
      <main className="py-3" style={{ minHeight: "80vh" }}>
        <Container>
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
