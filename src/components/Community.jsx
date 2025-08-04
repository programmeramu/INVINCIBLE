import React from "react";

export default function Community() {
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
        }}>Community</h2>
        <div className="cards-row">
          <div className="card">
            <div className="card-title">Forum</div>
            <div className="card-desc">Discuss features, get help, and share ideas with other INVINCIBLE users.</div>
          </div>
          <div className="card">
            <div className="card-title">Events</div>
            <div className="card-desc">Join workshops, meetups, and online events.</div>
          </div>
          <div className="card">
            <div className="card-title">Contribute</div>
            <div className="card-desc">Help make INVINCIBLE better. Open source, open to all!</div>
          </div>
        </div>
      </div>
    </section>
  );
}