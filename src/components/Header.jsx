import React from "react";

export default function Header() {
  return (
    <header>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "1.4rem 2rem"
      }}>
        <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
          <img src="/logo.svg" alt="INVINCIBLE Logo" style={{height: "40px"}} />
          <span style={{fontWeight:700, fontSize:"1.5rem", letterSpacing:"-1px"}}>INVINCIBLE</span>
        </div>
        <div style={{display:"flex",gap:"2rem"}}>
          <a href="#" style={{color:"white",textDecoration:"none",fontWeight:500}}>Docs</a>
          <a href="#" style={{color:"white",textDecoration:"none",fontWeight:500}}>Blog</a>
          <a href="#" style={{color:"white",textDecoration:"none",fontWeight:500}}>Community</a>
          <a href="#" style={{
            padding:"0.6rem 1.3rem",
            background:"white",
            color:"#c3002f",
            borderRadius:"99px",
            fontWeight:700,
            textDecoration:"none"
          }}>Get Started</a>
        </div>
      </nav>
    </header>
  );
}