"use client";
// Add more testimonials to the array below as you collect them.

const testimonials = [
  {
    initials: "AO",
    name: "Adebayo Okonkwo",
    role: "HR Manager, TechCorp Nigeria",
    text: "Diego's has been supplying our office with lunch for over 6 months and the quality has never dipped. Our employees love the variety and freshness.",
    stars: 5,
  },
  {
    initials: "FK",
    name: "Funke Kelechi",
    role: "Private Client",
    text: "We hired Diego's for our daughter's wedding reception and the food was absolutely sensational. Every guest was impressed. Highly recommend!",
    stars: 5,
  },
  {
    initials: "CE",
    name: "Chinedu Eze",
    role: "Event Planner, Lagos",
    text: "The pounded yam and egusi soup were exactly what our guests expected at our company anniversary. Delivered on time, packaged beautifully.",
    stars: 5,
  },
  {
    initials: "NB",
    name: "Ngozi Balogun",
    role: "School Administrator",
    text: "We switched to Diego's for our student meals program and the difference was immediate. Hygienic, tasty, and the kids love it.",
    stars: 5,
  },
  {
    initials: "TO",
    name: "Tunde Olawale",
    role: "Corporate Event Manager",
    text: "Booked Diego's for a 200-person conference lunch. Zero complaints, everything was on time, and the food was incredible. Will use again.",
    stars: 5,
  },
  {
    initials: "AA",
    name: "Amaka Achebe",
    role: "Family Client",
    text: "Ordered for my mother's 70th birthday. The pepper soup and jollof rice had everyone going back for seconds. Truly sensationally good!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "white", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Testimonials</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            What our clients say
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Don&apos;t take our word for it — hear from the people we&apos;ve served.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "24px" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "var(--cream)",
                borderRadius: "14px",
                padding: "28px",
                border: "1px solid rgba(155,28,28,0.08)",
              }}
            >
              <div style={{ color: "var(--gold)", fontSize: "16px", marginBottom: "14px", letterSpacing: "2px" }}>
                {"★".repeat(t.stars)}
              </div>
              <p style={{ fontSize: "15px", color: "var(--text)", lineHeight: 1.75, marginBottom: "20px", fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "var(--crimson)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "15px",
                    fontFamily: "var(--font-playfair)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
