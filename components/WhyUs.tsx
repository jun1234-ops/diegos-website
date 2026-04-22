"use client";
const reasons = [
  { icon: "🌿", title: "Quality Ingredients", desc: "We source fresh, locally-sourced ingredients daily. No shortcuts, no compromise." },
  { icon: "⚡", title: "On-Time Delivery", desc: "We understand that timing matters. Your meals arrive when you need them — every time." },
  { icon: "🧼", title: "Hygienic Preparation", desc: "Our kitchen operates under strict hygiene protocols. Every meal is safe, clean, and certified." },
  { icon: "👨‍🍳", title: "Professional Team", desc: "Experienced chefs and service staff trained to deliver excellence at every order." },
  { icon: "✏️", title: "Customizable Meals", desc: "Dietary preferences? Allergies? Special requests? We customize every order with care." },
  { icon: "💬", title: "Always Responsive", desc: "Our team is always a message or call away. Great food comes with great service." },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      style={{
        background: "linear-gradient(135deg, var(--crimson-dark), #3D0C0C)",
        padding: "90px 5%",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label section-label-gold">Why Diego&apos;s</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "14px" }}>
            The Diego&apos;s difference
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            We don&apos;t just cook food — we deliver an experience built on trust, quality, and care.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "28px 24px",
                textAlign: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            >
              <div style={{ width: "56px", height: "56px", background: "rgba(212,160,23,0.15)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", margin: "0 auto 18px" }}>
                {r.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "10px" }}>
                {r.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
