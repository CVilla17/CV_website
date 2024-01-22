import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Poetry from "../pages/Poetry";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar style={{ backgroundColor: "#00ABE4" }}>
            <Container>
              <Navbar.Brand href="/CV_website">Explore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/CV_website"}>
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
            <Route exact path="/CV_website" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/poetry" element={<Poetry />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
