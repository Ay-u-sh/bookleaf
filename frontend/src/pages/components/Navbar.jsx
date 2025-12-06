import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const closeDrawer = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand">
          BookLeaf
        </NavLink>

        {/* Desktop links */}
        <nav className="navbar-links navbar-links-desktop">
          <NavLink to="/pricing" className="nav-link">
            Pricing
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>

        {/* Right: Register + toggle */}
        <div className="navbar-right">
          <Link to="/register" className="nav-cta">
            Register
          </Link>

          <button
            className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
            onClick={toggle}
            aria-label="Toggle navigation"
          >
            <span className="nav-toggle-line" />
          </button>
        </div>
      </div>

      {/* Mobile drawer links */}
      {open && (
        <nav className="navbar-drawer">
          <NavLink
            to="/pricing"
            className="nav-link"
            onClick={closeDrawer}
          >
            Pricing
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
}
