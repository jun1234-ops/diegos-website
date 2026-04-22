"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const items = [
  { img: "/Fried_Rice.jpg", label: "Signature Dishes", span: true },
  { img: "/Event_Packages.jpg", label: "Event Catering", span: false },
  { img: "/Eba__Egusi_soup.jpg", label: "Healthy Meals", span: false },
  { img: "/Peppered_Fish.jpg", label: "Protein Options", span: false },
  { img: "/Corporate_Packs.jpg", label: "Packaging", span: false },
];

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="gallery" style={{ background: "var(--cream)", padding: isMobile ? "60px 5%" : "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Gallery</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            See the quality yourself
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Real food. Real events. Real satisfaction.
          </p>
        </div>

        {/* Desktop grid */}
        {!isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 180px)",
              gap: "16px",
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.label}
                style={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  gridColumn: i === 0 ? "span 2" : undefined,
                  gridRow: i === 0 ? "span 2" : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  const overlay = e.currentTarget.querySelector(".gallery-overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }} />
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(155,28,28,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 600,
                    zIndex: 1,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile grid — 2 columns, equal height, label always visible */}
        {isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.label}
                style={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  height: i === 0 ? "200px" : "140px",
                  gridColumn: i === 0 ? "span 2" : undefined,
                }}
              >
                <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }} />
                {/* Label always visible on mobile */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(155,28,28,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}