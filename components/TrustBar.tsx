"use client";
const items = [
  { icon: "🏢", text: "Trusted by top companies" },
  { icon: "✓", text: "NAFDAC Compliant" },
  { icon: "🍽", text: "300+ meals daily" },
  { icon: "⚡", text: "Same-day catering available" },
  { icon: "🎯", text: "Zero missed deliveries" },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "var(--cream-dark)",
        padding: "28px 5%",
        borderTop: "3px solid var(--gold)",
        borderBottom: "1px solid rgba(155,28,28,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--muted)", fontSize: "14px", fontWeight: 500 }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "var(--crimson)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "16px",
              }}
            >
              {item.icon}
            </div>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
