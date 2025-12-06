// src/pages/Policy.jsx
import React from "react";
import "./Policy.css";

export default function Policy() {
  return (
    <main className="policy-page" role="main" aria-labelledby="policy-heading">
      <div className="policy-container">

        <header className="policy-header">
          <h1 id="policy-heading" className="policy-title">Terms of Service &amp; Privacy Policy</h1>
          <p className="policy-lead">Last updated: December 4, 2025</p>
        </header>

        <nav className="policy-toc" aria-label="On-page navigation">
          <ul>
            <li><a href="#terms" className="toc-link">Terms of Service</a></li>
            <li><a href="#privacy" className="toc-link">Privacy Policy</a></li>
            <li><a href="#contact" className="toc-link">Contact</a></li>
          </ul>
        </nav>

        {/* ---------------------------
            TERMS OF SERVICE
        ---------------------------- */}
        <section id="terms" className="policy-section" aria-labelledby="terms-heading">
          <h2 id="terms-heading" className="section-title">Terms of Service</h2>

          <p className="section-meta">Welcome to <strong>Bookly</strong>. By using our service you agree to these Terms. If you do not agree, please do not use Bookly.</p>

          <h3 className="subheading">1. Overview</h3>
          <p className="section-body">
            Bookly provides a simple appointment-booking service. When a business registers, we generate a booking link customers can use to request appointments.
          </p>

          <h3 className="subheading">2. Eligibility</h3>
          <p className="section-body">
            You must be at least 18 years old and able to form a binding contract to use Bookly.
          </p>

          <h3 className="subheading">3. Your Account</h3>
          <p className="section-body">
            You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.
          </p>

          <h3 className="subheading">4. Acceptable Use</h3>
          <p className="section-body">
            You must not use Bookly for illegal, fraudulent, abusive, or deceptive purposes. We may suspend or terminate accounts that violate these terms.
          </p>

          <h3 className="subheading">5. Bookings & Communication</h3>
          <p className="section-body">
            When a customer books, the details (name, phone, notes, time) are delivered to the business by email. You are responsible for honoring appointments and following applicable laws.
          </p>

          <h3 className="subheading">6. Service Availability</h3>
          <p className="section-body">
            We strive for high availability but do not guarantee uninterrupted service. Scheduled maintenance or events outside our control may affect availability.
          </p>

          <h3 className="subheading">7. Changes</h3>
          <p className="section-body">
            We may update features or these Terms from time to time. Major changes will be communicated via email or on the website.
          </p>

          <h3 className="subheading">8. Limitation of Liability</h3>
          <p className="section-body">
            Bookly is provided “as is”. We are not responsible for missed appointments, incorrect user-entered data, or losses arising from use of the service.
          </p>

          <h3 className="subheading">9. Termination</h3>
          <p className="section-body">
            You may stop using Bookly at any time. We may suspend or terminate accounts for policy violations or abuse.
          </p>
        </section>

        {/* ---------------------------
            PRIVACY POLICY
        ---------------------------- */}
        <section id="privacy" className="policy-section" aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="section-title">Privacy Policy</h2>

          <p className="section-meta">This section explains what we collect, why, and how you can manage your information.</p>

          <h3 className="subheading">1. Data We Collect</h3>
          <p className="section-body">
            <strong>From businesses:</strong> account name, email, phone, business details, preferences (hours, duration).<br />
            <strong>From customers (when they book):</strong> name, phone number, any notes, and the selected date/time.
          </p>

          <h3 className="subheading">2. How We Use Data</h3>
          <p className="section-body">
            We use data to create accounts, generate booking links, deliver booking details via email, improve the service, and detect abuse. We do not sell personal data.
          </p>

          <h3 className="subheading">3. Email Delivery</h3>
          <p className="section-body">
            Booking details are sent to the business email address. Delivery can be affected by the business’s email provider or spam filters — we cannot guarantee email delivery.
          </p>

          <h3 className="subheading">4. Cookies & Analytics</h3>
          <p className="section-body">
            We may use minimal cookies and analytics to understand usage and make Bookly better. We avoid invasive tracking.
          </p>

          <h3 className="subheading">5. Data Sharing</h3>
          <p className="section-body">
            We share data only with trusted service providers who help run Bookly (for example, email infrastructure), or as required by law. We do not share data for advertising.
          </p>

          <h3 className="subheading">6. Security & Storage</h3>
          <p className="section-body">
            We use industry best practices to protect data, but no system is perfectly secure. If you suspect a breach, contact us immediately.
          </p>

          <h3 className="subheading">7. Your Rights</h3>
          <p className="section-body">
            You may request access, correction, or deletion of your data. To submit a request, contact us at <a href="mailto:support@bookly.app" className="policy-link">support@bookly.app</a>.
          </p>

          <h3 className="subheading">8. Children’s Privacy</h3>
          <p className="section-body">
            Bookly is not for children under 13 and we do not knowingly collect information from children.
          </p>

          <h3 className="subheading">9. Policy Changes</h3>
          <p className="section-body">
            We may update this Privacy Policy. Material changes will be communicated via the site or email.
          </p>
        </section>

        {/* ---------------------------
            CONTACT
        ---------------------------- */}
        <section id="contact" className="policy-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="section-title">Contact</h2>
          <p className="section-body">
            For questions about these Terms or Privacy Policy, contact:
            <br />
            <a className="policy-link policy-email" href="mailto:support@bookly.app">support@bookly.app</a>
          </p>
        </section>

        <footer className="policy-foot">
          <p className="policy-legal">© {new Date().getFullYear()} Bookly. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
