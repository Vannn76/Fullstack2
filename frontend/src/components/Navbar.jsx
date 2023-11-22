import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {


  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item"><span className="mr-1"><FontAwesomeIcon icon="fa-solid fa-home" /></span> Home</a>
            <a href="/userlist" className="navbar-item"><span className="mr-1"><FontAwesomeIcon icon="fa-solid fa-users" /></span>Pelanggan</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
