import React from "react";

export default function Blog() {
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
        }}>Latest Blog Posts</h2>
        <div className="cards-row">
          <div className="card">
            <div className="card-title">Announcing INVINCIBLE v1.0</div>
            <div className="card-desc">Discover the features of our first stable release!</div>
          </div>
          <div className="card">
            <div className="card-title">How to Migrate Your App</div>
            <div className="card-desc">A step-by-step guide for moving from other frameworks to INVINCIBLE.</div>
          </div>
          <div className="card">
            <div className="card-title">Performance Deep Dive</div>
            <div className="card-desc">Learn how INVINCIBLE keeps your apps fast and responsive.</div>
          </div>
        </div>
      </div>
    </section>
  );
}