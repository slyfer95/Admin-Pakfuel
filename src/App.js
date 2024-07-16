import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { gapi } from "gapi-script";
import { Outlet } from "react-router-dom";

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const App = () => {
  // useEffect(() => {
  //   const start = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "email profile", // Specify the scopes needed
  //     });
  //   };

  //   gapi.load("client:auth2", start);
  // }, []);

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div>
      <Header />
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
