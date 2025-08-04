import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} INVINCIBLE &mdash; Inspired by Angular.dev | <a href="https://github.com/programmeramu/INVINCIBLE" style={{color:"var(--muted)",textDecoration:"underline"}}>GitHub</a>
      </div>
    </footer>
  );
}