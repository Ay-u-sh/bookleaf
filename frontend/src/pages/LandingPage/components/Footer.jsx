import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">Booklify</div>
            <p className="footer-tag">
              Fast, simple appointment booking for businesses & individuals.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Product</h4>
            <a href="/business">Get Started</a>
            <a href="#">Why BookMate</a>
            <a href="#">How It Works</a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Booklify — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
