import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import '../../Sass/App.css';

const NavBar = () => (
  <div>
      <Navbar className="nav-bar" sticky="top">
          <Navbar.Brand className="logo" bg="primary" href="#">Nasa Photos</Navbar.Brand>
          <Nav className="nav-links">
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Test</Nav.Link>
              <Nav.Link href="#">Donate</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
      </Navbar>
  </div>
);

export default NavBar;