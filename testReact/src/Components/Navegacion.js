import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import LoginControl from "./LoginControl";
import { ControlLogin } from ".";

function Navegacion(props) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Gastro Avances</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/camara">Escanear</Nav.Link>
            <Nav.Link href="/retiros">Retiros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <ControlLogin></ControlLogin>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navegacion);
