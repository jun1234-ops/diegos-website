"use client";
import { useState, useEffect } from "react";

const stats = [
  { num: "500+", label: "Happy Clients" },
  { num: "5★", label: "Average Rating" },
  { num: "3 yrs", label: "In Business" },
  { num: "100%", label: "Hygiene Certified" },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, var(--crimson-dark) 0%, #3D0C0C 50%, #1A0505 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "100px 6% 60px" : "100px 5% 60px",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: isMobile ? "300px" : "600px",
          height: isMobile ? "300px" : "600px",
          background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ maxWidth: isMobile ? "100%" : "680px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.4)",
              borderRadius: "50px",
              padding: "8px 18px",
              marginBottom: "28px",
            }}
          >
            <span
              className="pulse-dot"
              style={{ width: "8px", height: "8px", background: "var(--gold)", borderRadius: "50%", display: "block" }}
            />
            <span style={{ color: "var(--gold)", fontSize: isMobile ? "11px" : "13px", fontWeight: 500, letterSpacing: "0.5px" }}>
              Now accepting corporate orders
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: isMobile ? "36px" : "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "22px",
            }}
          >
            Delicious Meals.<br />
            <span style={{ color: "var(--gold)" }}>Reliable Catering.</span>
            <br />Exceptional Service.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: isMobile ? "15px" : "17px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              marginBottom: "38px",
              maxWidth: isMobile ? "100%" : "520px",
            }}
          >
            From corporate meals to special events, Diego&apos;s delivers quality food you can trust — prepared with care, served with love.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex",
            gap: "12px",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
          }}>
            <button
              onClick={() => scrollTo("booking")}
              style={{
                background: "var(--gold)",
                color: "var(--dark)",
                padding: "14px 30px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-dm)",
                transition: "all 0.2s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.background = "var(--gold-light)"); (e.currentTarget.style.transform = "translateY(-1px)"); }}
              onMouseLeave={(e) => { (e.currentTarget.style.background = "var(--gold)"); (e.currentTarget.style.transform = "none"); }}
            >
              Book Now
            </button>
            <button
              onClick={() => scrollTo("menu")}
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 30px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                border: "2px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontFamily: "var(--font-dm)",
                transition: "all 0.2s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.borderColor = "white"); (e.currentTarget.style.background = "rgba(255,255,255,0.08)"); }}
              onMouseLeave={(e) => { (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"); (e.currentTarget.style.background = "transparent"); }}
            >
              View Menu
            </button>
            <button
              onClick={() => scrollTo("services")}
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 30px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                border: "2px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontFamily: "var(--font-dm)",
                transition: "all 0.2s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.borderColor = "white"); (e.currentTarget.style.background = "rgba(255,255,255,0.08)"); }}
              onMouseLeave={(e) => { (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"); (e.currentTarget.style.background = "transparent"); }}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)",
          gap: isMobile ? "24px" : "40px",
          marginTop: "60px",
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: isMobile ? "26px" : "32px", fontWeight: 700, color: "var(--gold)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}