"use client";
import React from "react";
const CONTACT = {
  phone: "+234 706 281 7227",
  email: "diegosbakeryandbistro@gmail.com",
  whatsapp: "https://wa.me/2347062817227",
  address: "1 FSTC Catering Unit, Oppsiye, Yaba Tech, Yaba, Lagos State.",
  hours: "Mon – Sat: 7:00 AM – 6:00 PM",
};

const contactItems = [
  { icon: "📞", label: "Phone", value: CONTACT.phone },
  { icon: "✉️", label: "Email", value: CONTACT.email },
  { icon: "📍", label: "Address", value: CONTACT.address },
  { icon: "🕐", label: "Working Hours", value: CONTACT.hours },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--cream)", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Contact Us</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            We&apos;re always here for you
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Reach out through any channel — we respond fast.
          </p>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                border: "1px solid rgba(155,28,28,0.08)",
              }}
            >
              <div style={{ width: "44px", height: "44px", background: "rgba(155,28,28,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "15px", color: "var(--text)", fontWeight: 500 }}>
                  {item.label === "Phone" ? (
                    <a href={`tel:${item.value.replace(/\s+/g, "")}`} style={{ color: "var(--text)", textDecoration: "underline" }}>
                      {item.value}
                    </a>
                  ) : item.label === "Email" ? (
                    <a href={`mailto:${item.value}`} style={{ color: "var(--text)", textDecoration: "underline" }}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            </div>
          ))}

                    <a
                    href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#25D366",
                        color: "white",
                        padding: "16px 24px",
                        borderRadius: "10px",
                        fontSize: "15px",
                        fontWeight: 700,
                        textDecoration: "none",
                        justifyContent: "center",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                    >
                      💬 Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </section>
            );
          }
