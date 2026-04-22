"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = {
  Pages: [
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "FAQ", id: "faq" },
  ],
  Services: [
    { label: "Corporate Meals", id: "booking" },
    { label: "Event Catering", id: "booking" },
    { label: "Bulk Orders", id: "booking" },
    { label: "Individual Orders", id: "booking" },
    { label: "Special Occasions", id: "booking" },
  ],
  Contact: [
    { label: "+234 706 281 7227", id: "contact" },
    { label: "diegosbakeryandbistro@gmail.com", id: "contact" },
    { label: "1 FSTC Catering Unit, Oppsiye, Yaba Tech, Yaba, Lagos State.", id: "contact" },
    { label: "WhatsApp Us", id: "contact" },
  ],
};

const socials = [
  { label: "f", title: "Facebook", url: null },
  { label: "ig", title: "Instagram", url: "https://www.instagram.com/diegosbakeryandbistro?igsh=YWVhcHJrMDk4bXNj" },
  { label: "tw", title: "Twitter / X", url: null },
  { label: "in", title: "LinkedIn", url: null },
];

export default function Footer() {
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
    <footer style={{ background: "var(--dark)", padding: isMobile ? "40px 5% 24px" : "60px 5% 30px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
            gap: isMobile ? "32px" : "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand column — full width on mobile */}
          <div style={{ gridColumn: isMobile ? "span 2" : undefined }}>
            <div style={{ marginBottom: "14px" }}>
              <Image
                src="/Diegos_logo.png"
                alt="Diego's Bakery & Bistro"
                width={120}
                height={64}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: "20px", maxWidth: isMobile ? "100%" : "260px" }}>
              Sensationally Good. Serving quality meals and catering services with passion, professionalism, and care.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) =>
                s.url ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "var(--font-dm)",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--crimson)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  >
                    {s.label}
                  </a>
                ) : (
                  <button
                    key={s.label}
                    title={s.title}
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.7)",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-dm)",
                      fontWeight: 700,
                      transition: "background 0.2s",
                      opacity: 0.4,
                    }}
                  >
                    {s.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, marginBottom: "18px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {col}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: isMobile ? "13px" : "14px",
                        cursor: "pointer",
                        fontFamily: "var(--font-dm)",
                        padding: 0,
                        textAlign: "left",
                        transition: "color 0.2s",
                        lineHeight: 1.5,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Diego&apos;s Bakery & Bistro. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Made with ❤️ for <span style={{ color: "var(--gold)" }}>great food</span>
          </p>
        </div>
      </div>
    </footer>
  );
}