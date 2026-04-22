"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply scroll up to our booking form, fill in your details across 4 easy steps, and submit. Our team will contact you within 2 hours to confirm. You can also reach us directly on WhatsApp or phone.",
  },
  {
    q: "How early should I book for an event?",
    a: "For events with 50+ guests, we recommend booking at least 5–7 days in advance. For daily corporate meal supply, 48 hours notice is typically sufficient. Same-day orders may be available depending on capacity.",
  },
  {
    q: "Do you handle large events?",
    a: "Absolutely! We regularly cater for events ranging from 20 to 1,000+ guests. Our team is experienced in large-scale food production, packaging, and serving. Request a quote for large events and we'll provide a custom plan.",
  },
  {
    q: "Can I customize my meal?",
    a: "Yes! We accommodate dietary preferences, allergies, and special requests. Just mention your requirements in the 'Special Instructions' section of your booking form and our team will work with you.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers, cash on delivery, and mobile payments. Payment details will be shared by our team once your booking is confirmed. No online payment is required at the time of booking.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes, we offer delivery across our service area. Delivery fees vary based on location and order size. Pickup is also available at no extra cost. Our team will confirm delivery details after your booking.",
  },
  {
    q: "Are your kitchens hygiene-certified?",
    a: "Yes. Diego's operates under strict food safety and hygiene standards, including NAFDAC compliance. Our kitchen staff are trained in food handling, and we conduct regular quality checks on every order.",
  },
  {
    q: "Can Diego's handle last-minute orders?",
    a: "We do our best to accommodate last-minute requests depending on availability. Contact us via WhatsApp for the fastest response on urgent orders.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "white", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">FAQ</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            Common questions answered
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Everything you need to know before placing your order.
          </p>
        </div>

        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(155,28,28,0.12)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: open === i ? "rgba(155,28,28,0.04)" : "transparent",
                  border: "none",
                  padding: "20px 24px",
                  textAlign: "left",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text)",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background 0.2s",
                }}
              >
                {faq.q}
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--crimson)",
                    flexShrink: 0,
                    marginLeft: "16px",
                    transform: open === i ? "rotate(180deg)" : "none",
                    transition: "transform 0.25s",
                    display: "inline-block",
                  }}
                >
                  ▾
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingBottom: open === i ? "20px" : "0",
                }}
              >
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.75 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
