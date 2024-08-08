import React from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
