import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-logo" src="/logo.svg" alt="INVINCIBLE Logo" />
      <div className="hero-title">The Modern App Framework</div>
      <div className="hero-desc">
        Build fast, scalable, and delightful web apps.<br />
        INVINCIBLE brings the power and simplicity of modern frameworks with the robustness you expect.
      </div>
      <a href="#" className="hero-btn">Get Started</a>
    </section>
  );
}