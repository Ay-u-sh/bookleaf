// src/pages/About.jsx
import React from "react";
import "./about.css";

export default function About() {
  return (
    <main className="about-page" role="main" aria-labelledby="about-heading">
      <div className="about-container">

        <header className="about-header">
          <h1 id="about-heading" className="about-title">About Bookly</h1>
          <p className="about-lead">A simpler way for businesses to get booked.</p>
        </header>

        {/* Intro */}
        <section className="about-section" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="section-title">What we are</h2>
          <p className="section-body">
            Running a small business already takes enough time — scheduling shouldn’t add to it.
            <strong> Bookly</strong> was created to make appointment booking effortless for everyone,
            from solo professionals to growing service businesses. No complicated dashboards. No
            back-and-forth messages. Just a clean booking link your customers can open anywhere.
          </p>
        </section>

        {/* Why we built */}
        <section className="about-section" aria-labelledby="why-heading">
          <h2 id="why-heading" className="section-title">Why we built Bookly</h2>
          <p className="section-body">
            Many small businesses handle scheduling manually — replying to messages, checking
            availability and sending confirmations. It works until it doesn’t. We built Bookly
            because service providers deserve tools that are <em>simple</em>, customers should be
            able to book in <em>seconds</em>, and businesses shouldn’t lose clients because a message
            got buried.
          </p>
        </section>

        {/* Philosophy */}
        <section className="about-section" aria-labelledby="philo-heading">
          <h2 id="philo-heading" className="section-title">Our philosophy</h2>
          <p className="section-body">
            <strong>Keep it simple. Make it fast. Focus on what matters.</strong> Bookly is intentionally
            minimal — great tools should feel invisible: they do their job and get out of the way.
            That’s why Bookly is easy to set up, easy for customers to use, and reliable for businesses.
          </p>
        </section>

        {/* Audience */}
        <section className="about-section" aria-labelledby="who-heading">
          <h2 id="who-heading" className="section-title">Who Bookly is for</h2>
          <p className="section-body">
            Salons & stylists, tutors & coaches, clinics & wellness professionals, trainers, consultants,
            freelancers and solo operators — anyone who offers appointment-based services. If you share
            a link, you can get booked.
          </p>
        </section>

        {/* Mission + contact */}
        <section className="about-section" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="section-title">Our mission</h2>
          <p className="section-body">
            To empower small businesses and individuals with tools that feel modern, effortless, and
            beautifully simple — without the complexity of traditional booking software. We want booking
            to be the <strong>easiest</strong> part of running a business.
          </p>

          <div className="contact-row">
            <div className="contact-text">
              <p className="section-body" style={{ marginBottom: 6 }}>
                Built with care. If you have feedback, ideas, or need help:
              </p>
              <a className="contact-link" href="mailto:support@bookly.app">support@bookly.app</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
