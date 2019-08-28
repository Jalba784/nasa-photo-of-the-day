import React from 'react';
import '../../Sass/navbar.scss';
import {Navbar} from "react-bootstrap";

const NavBar = () => (
  <div>
      <Navbar className="nav-bar">
          <Navbar.Brand bg="primary" href="#">Nasa Photos</Navbar.Brand>
      </Navbar>
  </div>
);

export default NavBar;