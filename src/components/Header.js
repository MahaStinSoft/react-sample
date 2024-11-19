import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo-image.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar mb-4">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
          <span className="navbar-brand-text">Finance</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-text">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-text">About</Nav.Link>
            <Nav.Link href="/loans" className="nav-link-text">Loans</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-text">Contact</Nav.Link>
            <Nav.Link href="/login" className="get-start">Get Start</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
