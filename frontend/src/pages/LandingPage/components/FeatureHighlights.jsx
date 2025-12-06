import React from "react";
import "./FeatureHighlights.css";

export default function FeatureHighlights() {
  const features = [
    {
      id: 1,
      title: "Start in 60 seconds",
      desc:
        "No onboarding. No setup. Register → get your booking link → share. Start taking appointments right away.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "A booking link that works everywhere",
      desc:
        "Customers can instantly start raising booking queries. No app required.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10.5 13.5a3.5 3.5 0 0 1 0-4.95l2.12-2.12a3.5 3.5 0 1 1 4.95 4.95L15 13.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 10.5a3.5 3.5 0 0 1 0 4.95L11.38 17.57a3.5 3.5 0 1 1-4.95-4.95L9 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Designed for small businesses and individuals",
      desc:
        "Perfect for salons, tutors, coaches, clinics, freelancers and solo professionals — simple, focused, and reliable.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Get all booking details in your inbox",
      desc:
        "Every appointment sends name, phone, time and notes to your email — everything in one place, no manual tracking.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M3 8l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 14.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="fh-root" aria-labelledby="fh-heading">
      <div className="fh-inner container">
        <div className="fh-header">
          <h2 id="fh-heading" className="fh-heading">Why businesses choose Booklify</h2>
          <p className="fh-sub">Simple, focused booking that saves time and gets customers showing up.</p>
        </div>

        {/* 2x2 cards */}
        <div className="fh-cards">
          {features.map((f) => (
            <article className="fh-card" key={f.id}>
              <div className="fh-card-icon" aria-hidden="true">{f.icon}</div>
              <h3 className="fh-card-title">{f.title}</h3>
              <p className="fh-card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
