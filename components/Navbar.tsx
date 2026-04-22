"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(26,10,10,0.98)" : "rgba(26,10,10,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212,160,23,0.25)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 5%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/Diegos_logo.png"
            alt="Diego's Bakery & Bistro"
            width={120}
            height={52}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0 }}>
            {["about", "services", "menu", "gallery", "testimonials", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "var(--font-dm)",
                    textTransform: "capitalize",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                >
                  {item === "about" ? "About" : item === "services" ? "Services" : item === "menu" ? "Menu" : item === "gallery" ? "Gallery" : item === "testimonials" ? "Reviews" : "Contact"}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Right side — Book Now (desktop) + Hamburger (mobile) */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isMobile && (
            <button
              onClick={() => scrollTo("booking")}
              style={{
                background: "var(--crimson)",
                color: "white",
                border: "none",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-dm)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--crimson-light)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--crimson)")}
            >
              Book Now
            </button>
          )}

          {/* Hamburger button — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                padding: "4px",
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                display: "block", width: "24px", height: "2px",
                background: "white",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                display: "block", width: "24px", height: "2px",
                background: "white",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "24px", height: "2px",
                background: "white",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          background: "rgba(26,10,10,0.98)",
          padding: "20px 5%",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          borderTop: "1px solid rgba(212,160,23,0.15)",
        }}>
          {["about", "services", "menu", "gallery", "testimonials", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-dm)",
                textTransform: "capitalize",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
            >
              {item === "about" ? "About" : item === "services" ? "Services" : item === "menu" ? "Menu" : item === "gallery" ? "Gallery" : item === "testimonials" ? "Reviews" : "Contact"}
            </button>
          ))}
          {/* Book Now inside mobile menu */}
          <button
            onClick={() => scrollTo("booking")}
            style={{
              marginTop: "12px",
              background: "var(--crimson)",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "var(--font-dm)",
              width: "100%",
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}