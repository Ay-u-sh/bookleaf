import React from "react";
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Left : Brand */}
        <NavLink to="/" className="navbar-brand">
          Booklify
        </NavLink>

        {/* Right : Nav links */}
        <nav className="navbar-links">
          <NavLink to="/pricing" className="nav-link">Pricing </NavLink>
          <Link to="/register" className="nav-cta">Register </Link>
        </nav>
      </div>
    </header>
  );
}
