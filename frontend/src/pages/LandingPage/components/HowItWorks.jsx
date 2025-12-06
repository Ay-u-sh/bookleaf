import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="howitworks" aria-labelledby="howitworks-heading">
      <div className="howitworks-inner container">

        <h2 id="howitworks-heading" className="howitworks-title">
          How BookLeaf works — 3 easy steps
        </h2>

        <p className="howitworks-sub">
          Get started, share your link, and receive bookings directly to your email — no fuss, no setup.
        </p>


        <div className="howitworks-steps" role="list">

          <article className="howitworks-step" role="listitem">
            <div className="hw-icon" aria-hidden="true">
              {/* simple clipboard / form icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-1c0-2.8 2.7-5 6-5s6 2.2 6 5v1" />
                <rect x="3" y="3" width="6" height="4" rx="1" fill="currentColor" opacity="0.12"/>
                </svg>
            </div>

            <h3 className="hw-step-title">Register your business</h3>
            <p className="hw-step-desc">
              Create your business page in under a minute. No complicated setup — just your basic details and availability.
            </p>
          </article>


          <article className="howitworks-step" role="listitem">
            <div className="hw-icon" aria-hidden="true">
              {/* link icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path d="M10.5 13.5a3.5 3.5 0 0 1 0-4.95l2.12-2.12a3.5 3.5 0 1 1 4.95 4.95L15 13.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 10.5a3.5 3.5 0 0 1 0 4.95L11.38 17.57a3.5 3.5 0 1 1-4.95-4.95L9 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h3 className="hw-step-title">Share your booking link</h3>
            <p className="hw-step-desc">
              Copy the booking link and share it across WhatsApp, Instagram, or your website — customers pick a slot on any device.
            </p>
          </article>

          <article className="howitworks-step" role="listitem">
            <div className="hw-icon" aria-hidden="true">
              {/* mail / check icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 8l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>


            <h3 className="hw-step-title">Receive bookings by email</h3>
            <p className="hw-step-desc">
              When a customer books, you get the appointment details in your email instantly — ready to manage or confirm.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}
