// src/pages/BookingReceivedPage.jsx
import React from "react";
import { useNavigate , useParams } from "react-router-dom";
import "./BookingReceivedPage.css";

export default function BookingReceivedPage() {
  const navigate = useNavigate();
  const {businessId} = useParams();
  return (
    <main
      className="booking-received-page"
      role="main"
      aria-labelledby="booking-received-heading"
    >
      <div className="booking-received-shell">
        {/* icon */}
        <div className="booking-received-visual" aria-hidden="true">
          <svg
            className="br-check"
            viewBox="0 0 48 48"
            focusable="false"
            aria-hidden="true"
          >
            {/* calendar outline */}
            <rect
              x="9"
              y="13"
              width="30"
              height="24"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* top bar */}
            <line
              x1="9"
              y1="18"
              x2="39"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* calendar rings */}
            <line
              x1="17"
              y1="10"
              x2="17"
              y2="14"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <line
              x1="31"
              y1="10"
              x2="31"
              y2="14"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* checkmark */}
            <path
              className="br-tick"
              d="M18 26.5l4 4L30 23"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="booking-received-body">
          <h1
            id="booking-received-heading"
            className="booking-received-title"
          >
            Booking request received
          </h1>

          <p className="booking-received-sub">
            We’ve received your booking request and shared the details with the
            business over email.
          </p>

          <p className="booking-received-text">
            You’ll hear back if they need to reschedule or confirm anything.
            Keep an eye on your phone or email for updates closer to your
            appointment time.
          </p>

          <div className="booking-received-actions">
            <button
              type="button"
              className="btn br-primary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>

            <button
              type="button"
              className="btn br-ghost"
              onClick={() => navigate(businessId?`/book/${businessId}`:'/')}
            >
              Make another booking
            </button>
          </div>

          <p className="booking-received-hint">
            If you entered the wrong details, you can submit a new booking with
            the correct information.
          </p>
        </div>
      </div>
    </main>
  );
}
