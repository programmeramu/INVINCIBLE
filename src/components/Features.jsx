import React from "react";

const features = [
  {
    title: "Instant Start",
    desc: "Lightning-fast setup and reloads for developers. Zero config, zero friction.",
  },
  {
    title: "Scalable Structure",
    desc: "Organize your code for big apps—modular, maintainable, and robust.",
  },
  {
    title: "First-Class TypeScript",
    desc: "Type safety built-in. Enjoy autocomplete, refactoring, and error prevention.",
  },
  {
    title: "Powerful CLI",
    desc: "Generate, test, and deploy with a single command. No more boilerplate.",
  },
];

export default function Features() {
  return (
    <section>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        <h2 style={{
          textAlign:"center",
          fontSize:"2rem",
          fontWeight:800,
          marginBottom:"2rem"
        }}>Why INVINCIBLE?</h2>
        <div className="cards-row">
          {features.map((f, idx) => (
            <div className="card" key={f.title}>
              <div className="card-title">{f.title}</div>
              <div className="card-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}