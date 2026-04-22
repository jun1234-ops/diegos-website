"use client";
import Image from "next/image";
const values = [
  { title: "Mission", text: "Nourish every table with quality, care, and consistency." },
  { title: "Vision", text: "The most trusted food brand in every community we serve." },
  { title: "Hygiene", text: "NAFDAC-compliant kitchen standards, every single day." },
  { title: "Values", text: "Quality, reliability, professionalism, and warmth." },
];

const points = [
  "Fresh ingredients sourced daily",
  "Certified hygienic kitchen operations",
  "Professional, uniformed staff",
  "Flexible meal customization",
  "Timely delivery, guaranteed",
];

export default function About() {
  return (
    <section id="about" style={{ background: "white", padding: "90px 5%" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Visual card */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 100%)",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-30px",
              right: "-30px",
              width: "150px",
              height: "150px",
              background: "rgba(212,160,23,0.2)",
              borderRadius: "50%",
            }}
          />
         <Image src="/Diegos_logo.png" alt="Diego's Bakery & Bistro" width={200} height={200} style={{ objectFit: "contain", margin: "0 auto 16px" }} />
<div style={{ fontFamily: "var(--font-playfair)", fontSize: "22px", color: "var(--gold)", fontStyle: "italic" }}>
  &ldquo;Sensationally Good.&rdquo;
</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "32px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  padding: "16px",
                  textAlign: "left",
                }}
              >
                <div style={{ color: "var(--gold)", fontSize: "13px", fontWeight: 700, marginBottom: "4px" }}>{v.title}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", lineHeight: 1.5 }}>{v.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="section-label">Our Story</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "20px" }}>
            Built on a passion for <em>great food</em>
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "18px", fontSize: "16px" }}>
            Diego&apos;s was born from a simple belief: everyone deserves a meal that feels like it was made just for them. What started as a family kitchen operation has grown into one of the most trusted food production and catering services around.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "18px", fontSize: "16px" }}>
            Today, we serve <strong style={{ color: "var(--text)" }}>corporate offices, schools, event planners, families, and individuals</strong> — all with the same dedication to quality that has defined us from day one.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "24px", fontSize: "16px" }}>
            Every ingredient is carefully sourced. Every meal is prepared fresh. Every delivery is made on time. That&apos;s the Diego&apos;s promise.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {points.map((point) => (
              <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "var(--text)" }}>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: "var(--crimson)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "11px",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  ✓
                </div>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
