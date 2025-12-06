// src/pages/VerifyRequestPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyRequestPage.css";

export default function VerifyRequestPage() {
  const navigate = useNavigate();

  return (
    <main className="verify-page" role="main" aria-labelledby="verify-heading">
      <div className="verify-shell">

        {/* visual */}
        <div className="verify-visual" aria-hidden="true">
          <svg className="checkmark" viewBox="0 0 48 48" focusable="false" aria-hidden="true">
            <circle className="ring" cx="24" cy="24" r="20" fill="none" />
            <path className="tick" d="M14 25.5l6 5.5L34 15" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* content */}
        <div className="verify-body">
          <h1 id="verify-heading" className="verify-title">Verification email sent</h1>

          <p className="verify-sub">
            A verification link has been sent to your email. Click the link in that message to finish setting up your account and receive your booking link.
          </p>

          <p id="verify-desc" className="verify-desc">
            Don’t see the message? Check your spam or junk folder. If it’s still missing, request a new verification email or try a different address.
          </p>

          <div className="verify-actions">
            <button
              type="button"
              className="btn verify-btn-primary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>

            {/* <button
              type="bu tton"
              className="btn btn-ghost"
              onClick={() => navigate("/resend-verification")}
            >
              Resend verification
            </button> */}
          </div>

          <p className="verify-hint">
           You can close this page.
          </p>
        </div>
      </div>
    </main>
  );
}
