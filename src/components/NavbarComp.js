import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Interests from "../pages/Interests";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary" variant={"dark"} expand="lg">
            <Container>
              <Navbar.Brand href="#home">Explore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/projects"}>
                    Projects
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/poetry"}>
                    Poetry
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
