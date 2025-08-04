import React from "react";

export default function Docs() {
  return (
    <section>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        <h2 style={{
          fontSize:"1.7rem",
          fontWeight:700,
          marginBottom:"1.2rem"
        }}>Documentation</h2>
        <div className="cards-row">
          <div className="card">
            <div className="card-title">Get Started</div>
            <div className="card-desc">Follow the guide to quickly create your first INVINCIBLE app.</div>
          </div>
          <div className="card">
            <div className="card-title">Tutorials</div>
            <div className="card-desc">Step-by-step lessons for beginners and pros. Learn by building!</div>
          </div>
          <div className="card">
            <div className="card-title">API Reference</div>
            <div className="card-desc">Comprehensive docs for every INVINCIBLE feature.</div>
          </div>
        </div>
      </div>
    </section>
  );
}