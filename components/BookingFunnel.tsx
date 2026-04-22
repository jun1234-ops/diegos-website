"use client";
import { useState, ChangeEvent } from "react";

// ─────────────────────────────────────────────
// GOOGLE FORM INTEGRATION
// ─────────────────────────────────────────────
// 1. Create a Google Form with these fields:
//    - Full Name
//    - Phone Number
//    - Email Address
//    - Type of Service
//    - Meal Selection
//    - Quantity
//    - Date
//    - Delivery or Pickup
//    - Location
//    - Special Instructions
//
// 2. Get the form's POST action URL:
//    Open the form → click the 3-dot menu → "Get pre-filled link"
//    Fill all fields → "Get link" → copy the URL
//    The base URL (before the ?) is your FORM_ACTION below
//
// 3. Get each field's entry ID:
//    In the pre-filled URL, each field appears as entry.XXXXXXXXX=value
//    Copy those entry IDs into the FIELD_IDS object below
// ─────────────────────────────────────────────

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRkRwnt8WtbJgl5psb35NGg2Ra9-nT-49R5bFmAsTqrcfnPA/formResponse";

const FIELD_IDS = {
  name: "entry.1118159326",
  phone: "entry.368614013",
  email: "entry.1771598580",
  service: "entry.579547915",
  meal: "entry.728987898",
  quantity: "entry.1208135487",
  date: "entry.49518717",
  deliveryType: "entry.1458535765",
  location: "entry.2096818019",
  notes: "entry.1035897756",
  customMeal: "entry.1156013221",
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  meal: string;
  quantity: string;
  date: string;
  deliveryType: string;
  location: string;
  notes: string;
  customMeal: string;
};

const STEP_LABELS = ["Basic Info", "Service Details", "Logistics", "Final Step"];

export default function BookingFunnel() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "",
    service: "", meal: "", quantity: "",
    date: "", deliveryType: "", location: "",
    notes: "",customMeal: "",
  });

  const set = (key: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submitToGoogle = async () => {
  setLoading(true);

  const params = new URLSearchParams({
    [FIELD_IDS.name]:         form.name,
    [FIELD_IDS.phone]:        form.phone,
    [FIELD_IDS.email]:        form.email,
    [FIELD_IDS.service]:      form.service,
    [FIELD_IDS.meal]:         form.meal,
    [FIELD_IDS.quantity]:     form.quantity,
    [FIELD_IDS.date]:         form.date,
    [FIELD_IDS.deliveryType]: form.deliveryType,
    [FIELD_IDS.location]:     form.location,
    [FIELD_IDS.notes]:        form.notes,
    [FIELD_IDS.customMeal]:   form.customMeal,
  });

  return new Promise<void>((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.name = "hidden-form-target";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const formEl = document.createElement("form");
    formEl.method = "POST";
    formEl.action = FORM_ACTION;
    formEl.target = "hidden-form-target";

    params.forEach((value, key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      formEl.appendChild(input);
    });

    document.body.appendChild(formEl);

    iframe.onload = () => {
      document.body.removeChild(formEl);
      document.body.removeChild(iframe);
      setLoading(false);
      setSubmitted(true);
      resolve();
    };

    formEl.submit();
  });
};
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid rgba(155,28,28,0.15)",
    borderRadius: "9px",
    fontSize: "14px",
    fontFamily: "var(--font-dm)",
    color: "var(--text)",
    background: "var(--cream)",
    outline: "none",
    transition: "border 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--text)",
    marginBottom: "7px",
  };

  const groupStyle: React.CSSProperties = { marginBottom: "16px" };

  return (
    <section id="booking" style={{ background: "var(--cream-dark)", padding: "90px 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">Book Now</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "14px" }}>
            Place your order in 4 easy steps
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Fill out the form below and we&apos;ll reach out to confirm your booking within 2 hours.
          </p>
        </div>

        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            background: "white",
            borderRadius: "20px",
            padding: "clamp(28px,5vw,48px)",
            boxShadow: "0 20px 60px rgba(155,28,28,0.10)",
          }}
        >
          {/* Progress bar */}
          {!submitted && (
            <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
              {STEP_LABELS.map((label, i) => {
                const n = i + 1;
                const isDone = n < step;
                const isActive = n === step;
                return (
                  <div key={label} style={{ display: "flex", alignItems: "center", flex: i < 3 ? "1" : "0" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: 700,
                          flexShrink: 0,
                          background: isDone || isActive ? "var(--crimson)" : "rgba(155,28,28,0.1)",
                          color: isDone || isActive ? "white" : "var(--muted)",
                          boxShadow: isActive ? "0 0 0 6px rgba(155,28,28,0.15)" : "none",
                          transition: "all 0.3s",
                        }}
                      >
                        {isDone ? "✓" : n}
                      </div>
                      <span style={{ fontSize: "10px", color: isActive ? "var(--crimson)" : "var(--muted)", fontWeight: isActive ? 600 : 400, whiteSpace: "nowrap" }}>
                        {label}
                      </span>
                    </div>
                    {i < 3 && (
                      <div style={{ flex: 1, height: "3px", background: isDone ? "var(--crimson)" : "rgba(155,28,28,0.12)", margin: "0 8px 20px", transition: "background 0.3s" }} />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* STEP 1 */}
          {!submitted && step === 1 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>Your Basic Info</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>Step 1 of 4 — Tell us a bit about you</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={groupStyle}>
                  <label style={labelStyle}>Full Name *</label>
                  <input style={inputStyle} type="text" placeholder="e.g. John Adeyemi" value={form.name} onChange={set("name")} />
                </div>
                <div style={groupStyle}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input style={inputStyle} type="tel" placeholder="e.g. 08012345678" value={form.phone} onChange={set("phone")} />
                </div>
              </div>
              <div style={groupStyle}>
                <label style={labelStyle}>Email Address *</label>
                <input style={inputStyle} type="email" placeholder="john@company.com" value={form.email} onChange={set("email")} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                <NextBtn onClick={() => setStep(2)} label="Next: Service Details →" />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {!submitted && step === 2 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>Service Details</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>Step 2 of 4 — What do you need?</p>
              <div style={groupStyle}>
                <label style={labelStyle}>Type of Service *</label>
                <select style={inputStyle} value={form.service} onChange={set("service")}>
                  <option value="">Select a service...</option>
                  <option>Corporate Meal Supply</option>
                  <option>Event Catering</option>
                  <option>Bulk Food Production</option>
                  <option>Individual Order</option>
                  <option>Special Occasion Catering</option>
                </select>
              </div>
              <div style={groupStyle}>
                <label style={labelStyle}>Meal Selection</label>
                <select style={inputStyle} value={form.meal} onChange={set("meal")}>
                  <option value="">Select preferred meals...</option>
                  <option>Jollof Rice</option>
                  <option>Fried Rice</option>
                  <option>Native Rice</option>
                  <option>Eba &amp; Egusi Soup</option>
                  <option>Pounded Yam &amp; Soup</option>
                  <option>Bitterleaf Soup</option>
                  <option>Grilled Chicken</option>
                  <option>Corporate Pack</option>
                  <option>Mixed / Custom (Specify Below)</option>
                </select> 
                {form.meal === "Mixed / Custom (Specify Below)" && (
                  <div style={{ marginTop: "12px" }}>
                    <label style={labelStyle}>Please specify your meal selection</label>
                    <input
                      style={inputStyle}
                      type="text"
                      value={form.customMeal}
                      onChange={set("customMeal")}
                      placeholder="Example: 2 Jollof Rice + 1 Fried Rice"
                    />
                  </div>
                )}
              </div>
              <div style={groupStyle}>
                <label style={labelStyle}>Quantity / Number of Portions *</label>
                                <input style={inputStyle} type="number" placeholder="e.g. 50" min="1" value={form.quantity} onChange={set("quantity")} />
              </div>
              <FunnelNav onBack={() => setStep(1)} onNext={() => setStep(3)} nextLabel="Next: Logistics →" />
            </div>
          )}
          {/* STEP 3 */}
          {!submitted && step === 3 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>Delivery Logistics</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>Step 3 of 4 — When and where?</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={groupStyle}>
                  <label style={labelStyle}>Preferred Date *</label>
                  <input style={inputStyle} type="date" value={form.date} onChange={set("date")} />
                </div>
                <div style={groupStyle}>
                  <label style={labelStyle}>Delivery or Pickup? *</label>
                  <select style={inputStyle} value={form.deliveryType} onChange={set("deliveryType")}>
                    <option value="">Select...</option>
                    <option>Delivery</option>
                    <option>Pickup</option>
                  </select>
                </div>
              </div>
              <div style={groupStyle}>
                <label style={labelStyle}>Delivery Address / Location *</label>
                <input style={inputStyle} type="text" placeholder="e.g. 14 Broad Street, Lagos Island" value={form.location} onChange={set("location")} />
              </div>
              <FunnelNav onBack={() => setStep(2)} onNext={() => setStep(4)} nextLabel="Next: Final Step →" />
            </div>
          )}

          {/* STEP 4 */}
          {!submitted && step === 4 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>Almost Done!</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>Step 4 of 4 — Any special instructions?</p>
              <div style={groupStyle}>
                <label style={labelStyle}>Special Instructions (Optional)</label>
                <textarea
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                  placeholder="Dietary preferences, allergies, packaging requests, delivery notes..."
                  value={form.notes}
                  onChange={set("notes")}
                />
              </div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "20px", lineHeight: 1.6 }}>
                By submitting, you agree to be contacted by Diego&apos;s team to confirm your booking. No payment is collected online.
              </p>
              <FunnelNav
                onBack={() => setStep(3)}
                onNext={submitToGoogle}
                nextLabel={loading ? "Submitting..." : "Submit Booking ✓"}
              />
            </div>
          )}

          {/* SUCCESS */}
          {submitted && (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>🎉</div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "28px", fontWeight: 700, color: "var(--text)", marginBottom: "12px" }}>
                Booking Request Received!
              </h3>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
                Thank you! Your request has been received.<br />
                The Diego&apos;s team will contact you within 2 hours to confirm your booking.
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", color: "var(--crimson)", marginTop: "20px", fontStyle: "italic" }}>
                Sensationally Good.
              </p>
              <button
                onClick={() => { setSubmitted(false); setStep(1); setForm({ name:"",phone:"",email:"",service:"",meal:"",quantity:"",date:"",deliveryType:"",location:"",notes:"",customMeal:"" }); }}
                style={{ marginTop: "28px", background: "var(--crimson)", color: "white", border: "none", padding: "12px 30px", borderRadius: "8px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-dm)" }}
              >
                Place Another Order
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function NextBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "var(--crimson)", color: "white", border: "none", padding: "12px 30px", borderRadius: "8px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-dm)", transition: "background 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--crimson-light)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--crimson)")}
    >
      {label}
    </button>
  );
}

function FunnelNav({ onBack, onNext, nextLabel }: { onBack: () => void; onNext: () => void; nextLabel: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
      <button
        onClick={onBack}
        style={{ background: "transparent", border: "1.5px solid rgba(155,28,28,0.2)", color: "var(--muted)", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-dm)", transition: "all 0.2s" }}
        onMouseEnter={(e) => { (e.currentTarget.style.borderColor = "var(--crimson)"); (e.currentTarget.style.color = "var(--crimson)"); }}
        onMouseLeave={(e) => { (e.currentTarget.style.borderColor = "rgba(155,28,28,0.2)"); (e.currentTarget.style.color = "var(--muted)"); }}
      >
        ← Back
      </button>
      <NextBtn onClick={onNext} label={nextLabel} />
    </div>
  );
}
