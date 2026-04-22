"use client";

const services = [
  {
    icon: "🏢",
    title: "Corporate Meal Supply",
    desc: "Daily bulk meal preparation and delivery for offices, schools, and organizations. Reliable, consistent, and professionally packaged.",
    tags: ["Daily delivery", "Bulk orders", "Invoicing"],
  },
  {
    icon: "🎉",
    title: "Event Catering",
    desc: "Full-service catering for weddings, conferences, birthdays, and corporate events. We handle the food so you enjoy the moment.",
    tags: ["All occasions", "Setup included", "Serving staff"],
  },
  {
    icon: "🍲",
    title: "Bulk Food Preparation",
    desc: "Large-scale food production for any occasion. We prepare, package, and deliver — you focus on what matters most.",
    tags: ["100+ portions", "Custom menu", "Packaging"],
  },
  {
    icon: "🥡",
    title: "Individual Orders",
    desc: "Quick, delicious meals for individuals. Order your favourite meal and have it delivered fresh to your doorstep.",
    tags: ["Fast delivery", "Fresh daily", "Pickup option"],
  },
  {
    icon: "🎂",
    title: "Special Occasion Catering",
    desc: "Birthdays, anniversaries, naming ceremonies — we make every occasion memorable with food that impresses your guests.",
    tags: ["Customizable", "Décor add-ons", "Premium"],
  },
];

export default function Services() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" style={{ background: "var(--cream)", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">What We Do</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            Services tailored for you
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            Whether you&apos;re an office manager, event planner, or a family hosting a celebration — Diego&apos;s has you covered.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "white",
                borderRadius: "14px",
                padding: "32px 28px",
                border: "1px solid rgba(155,28,28,0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.transform = "translateY(-4px)");
                (e.currentTarget.style.boxShadow = "0 20px 50px rgba(155,28,28,0.12)");
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.transform = "none");
                (e.currentTarget.style.boxShadow = "none");
              }}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, var(--crimson), var(--gold))" }} />

              <div style={{ width: "54px", height: "54px", background: "rgba(155,28,28,0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", marginBottom: "20px" }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", fontWeight: 700, color: "var(--text)", marginBottom: "10px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "22px" }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ background: "rgba(155,28,28,0.08)", color: "var(--crimson)", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "50px" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => scrollTo("booking")}
                style={{
                  background: "transparent",
                  border: "1.5px solid var(--crimson)",
                  color: "var(--crimson)",
                  padding: "10px 20px",
                  borderRadius: "7px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-dm)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget.style.background = "var(--crimson)"); (e.currentTarget.style.color = "white"); }}
                onMouseLeave={(e) => { (e.currentTarget.style.background = "transparent"); (e.currentTarget.style.color = "var(--crimson)"); }}
              >
                Book Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
