import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main
      className="notfound-page"
      role="main"
      aria-labelledby="notfound-heading"
    >
      <div className="notfound-shell">
        <div className="notfound-visual" aria-hidden="true">
          <div className="notfound-badge">
            <span className="notfound-code">404</span>
          </div>
        </div>

        <div className="notfound-body">
          <h1 id="notfound-heading" className="notfound-title">
            Page not found
          </h1>

          <p className="notfound-sub">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <p className="notfound-text">
            You can go back to the homepage.
          </p>

          <div className="notfound-actions">
            <button
              type="button"
              className="btn nf-primary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>

          <p className="notfound-hint">
            If you think this is a mistake, check the URL or try again from the
            homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
