import React from "react";
import { NavLink } from "react-router-dom"; // Link

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to="/" className="navbar-brand">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className="nav-item nav-link"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/about"
            className="nav-item nav-link"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/login"
            className="nav-item nav-link"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
