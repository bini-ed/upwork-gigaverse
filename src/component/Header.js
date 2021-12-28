import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/header.css";

function Header() {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand className="font-electro" href="#home">
            GIGAVERSE LABS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="font-electro" href="#home">
                PROJECT
              </Nav.Link>
              <Nav.Link className="font-electro" href="#link">
                ABOUT
              </Nav.Link>
              <Nav.Link className="font-electro" href="#link">
                TWITTER
              </Nav.Link>
              <Nav.Link className="font-electro" href="#link">
                DISCORD
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
