"use client";
import { useState } from "react";
import Image from "next/image";

const categories = ["all", "rice", "swallow", "soup", "protein", "package"];

const meals = [
  { cat: "rice", img: "/Jollof_Rice.jpg", name: "Jollof Rice", desc: "Party-style jollof rice cooked to perfection with rich tomato sauce and spices.", portion: "Serves 1–2", badge: "Popular" },
  { cat: "rice", img: "/Fried_Rice.jpg", name: "Fried Rice", desc: "Flavourful fried rice with mixed vegetables, egg, and your choice of protein.", portion: "Serves 1–2", badge: null },
  { cat: "rice", img: "/Native_Rice.jpg", name: "Native Rice", desc: "Rich ofada-style rice cooked with local palm oil sauce and assorted meat.", portion: "Serves 1–2", badge: null },
  { cat: "swallow", img: "/Eba__Egusi_soup.jpg", name: "Eba & Egusi Soup", desc: "Classic eba paired with richly prepared egusi soup and assorted meat/fish.", portion: "Serves 1", badge: "Signature" },
  { cat: "swallow", img: "/Pounded_Yam.jpg", name: "Pounded Yam", desc: "Smooth, well-pounded yam served with your choice of soup.", portion: "Serves 1", badge: null },
  { cat: "soup", img: "/Bitterleaf_Soup.jpg", name: "Bitterleaf Soup", desc: "Traditional bitterleaf soup slow-cooked with palm oil, ogiri, and fresh beef.", portion: "Serves 2", badge: "Bestseller" },
  { cat: "soup", img: "/Oha_Soup.jpg", name: "Oha Soup", desc: "Delicious oha soup made with fresh oha leaves and crayfish — a true classic.", portion: "Serves 2", badge: null },
  { cat: "protein", img: "/Grilled_Chicken.jpg", name: "Grilled Chicken", desc: "Seasoned and perfectly grilled chicken, available whole or in pieces.", portion: "Per piece", badge: "Add-on" },
  { cat: "protein", img: "/Peppered_Fish.jpg", name: "Peppered Fish", desc: "Fresh fish seasoned with peppers and spices, grilled to smoky perfection.", portion: "Per piece", badge: null },
  { cat: "package", img: "/Corporate_Packs.jpg", name: "Corporate Pack (10)", desc: "10 full meals of your choice, packed individually and labeled — perfect for offices.", portion: "Serves 10", badge: "Best Value" },
  { cat: "package", img: "/Event_Packages.jpg", name: "Event Package (50)", desc: "Full catering package for 50 guests — starter, main, drinks and dessert.", portion: "Serves 50", badge: null },
];

export default function Menu() {
  const [active, setActive] = useState("all");

  const filtered = meals.filter((m) => active === "all" || m.cat === active);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="menu" style={{ background: "white", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-label">Our Menu</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            Meals made with love
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            Local and continental dishes, prepared fresh every day with quality ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "10px 22px",
                borderRadius: "50px",
                border: "1.5px solid",
                borderColor: active === cat ? "var(--crimson)" : "rgba(155,28,28,0.2)",
                background: active === cat ? "var(--crimson)" : "transparent",
                color: active === cat ? "white" : "var(--muted)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "var(--font-dm)",
                textTransform: "capitalize",
              }}
            >
              {cat === "all" ? "All Meals" : cat === "rice" ? "Rice Dishes" : cat === "swallow" ? "Swallow Meals" : cat === "soup" ? "Soups" : cat === "protein" ? "Proteins" : "Packages"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "22px" }}>
          {filtered.map((meal) => (
            <div
              key={meal.name}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "var(--cream)",
                border: "1px solid rgba(155,28,28,0.08)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              {/* Image area */}
             <div style={{ height: "160px", position: "relative", overflow: "hidden" }}>
  <Image src={meal.img} alt={meal.name} fill style={{ objectFit: "cover" }} />
  {meal.badge && (
    <span style={{ position: "absolute", top: "10px", right: "10px", background: "var(--crimson)", color: "white", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "50px", zIndex: 1 }}>
      {meal.badge}
    </span>
  )}
</div>
              {/* Body */}
              <div style={{ padding: "18px" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "17px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>
                  {meal.name}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "14px" }}>
                  {meal.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)", background: "rgba(155,28,28,0.06)", padding: "3px 10px", borderRadius: "50px" }}>
                    {meal.portion}
                  </span>
                  <button
                    onClick={() => scrollTo("booking")}
                    style={{ background: "var(--crimson)", color: "white", border: "none", padding: "7px 14px", borderRadius: "6px", fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-dm)" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
