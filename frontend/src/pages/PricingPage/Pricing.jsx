// PricingPage.jsx
import React from "react";
import "./Pricing.css";

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <h1 className="pricing-title">Pricing</h1>
        <p className="pricing-sub">
          {/* Simple, transparent pricing. No hidden fees — cancel anytime. */}
          This is a prototype and free version we will introduce pricing in commerical version
        </p>
      </section>

      <section className="pricing-grid">
        <article className="pricing-card">
          {/* Top Section */}
          <div className="card-header">
            <h3 className="card-title">Basic</h3>
            <p className="price-amount">$0 / month</p>
          </div>

          {/* Middle Content */}
          <div className="card-body">
            <ul className="features">
              <li className="feature-item">Unlimited bookings</li>
              {/* <li className="feature-item">Calendar sync (2-way)</li> */}
              <li className="feature-item">Custom branding</li>
              <li className="feature-item">Priority support</li>
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="card-actions">
            <button className="btn-primary">Get Started</button>
          </div>
        </article>
      </section>
    </main>
  );
}
