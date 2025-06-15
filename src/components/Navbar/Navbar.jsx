import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className="navbar-link "
            activeClassName="active-link"
          >
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/experience"
            className="navbar-link"
            activeClassName="active-link"
          >
            Experience
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className="navbar-link"
            activeClassName="active-link"
          >
            Projects
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
