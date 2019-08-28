import React from 'react';
import {Navbar} from "react-bootstrap";
import '../../Sass/App.css';

const NavBar = () => (
  <div>
      <Navbar className="nav-bar" sticky="top">
          <Navbar.Brand className="logo" bg="primary" href="#">Nasa Photos</Navbar.Brand>
      </Navbar>
  </div>
);

export default NavBar;