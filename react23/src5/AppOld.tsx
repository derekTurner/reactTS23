import React from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Presentation from "./components/Presentation";
import Tutorial from "./components/Tutorial";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>The page selected does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router baseline="/">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Svelte Starter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ padding: 5 }}>
                  Presentation
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tutorial" style={{ padding: 5 }}>
                  Tutorial
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
