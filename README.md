# Diego's Bakery & Bistro — Website

> **"Sensationally Good."**
> A conversion-focused landing page for Diego's food production and catering company.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
diegos-website/
├── app/
│   ├── layout.tsx          # Fonts (Playfair Display + DM Sans), SEO metadata
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Brand CSS variables + global styles
├── components/
│   ├── Navbar.tsx          # Sticky nav with smooth scroll
│   ├── Hero.tsx            # Hero section with CTA buttons + stats
│   ├── TrustBar.tsx        # Social proof strip
│   ├── About.tsx           # Company story, mission, values
│   ├── Services.tsx        # 5 service cards
│   ├── Menu.tsx            # Filterable menu grid (tabs by category)
│   ├── WhyUs.tsx           # 6 reasons — dark crimson background
│   ├── Gallery.tsx         # Photo grid (replace placeholders with real images)
│   ├── Testimonials.tsx    # 6 client reviews
│   ├── BookingFunnel.tsx   # 4-step booking form → submits to Google Forms
│   ├── FAQ.tsx             # Accordion FAQ (8 questions)
│   ├── Contact.tsx         # Contact info + WhatsApp button + contact form
│   └── Footer.tsx          # Full footer with links
├── public/
│   └── gallery/            # 📸 Put your food/event photos here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .gitignore
```

---

## 🔗 Google Form Integration

The booking form submits to Google Forms without a page redirect.

### Step-by-step setup:

1. Go to [forms.google.com](https://forms.google.com) and create a new form
2. Add these fields (Short Answer type):
   - Full Name
   - Phone Number
   - Email Address
   - Type of Service
   - Meal Selection
   - Quantity
   - Preferred Date
   - Delivery or Pickup
   - Location / Address
   - Special Instructions

3. Click the **3-dot menu (⋮)** → **"Get pre-filled link"**
4. Fill in dummy values for all fields → click **"Get Link"**
5. Copy the URL — it looks like:
   ```
   https://docs.google.com/forms/d/e/XXXXXXXX/viewform?entry.111=Name&entry.222=Phone...
   ```

6. Open `components/BookingFunnel.tsx` and update:
   ```ts
   const FORM_ACTION = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

   const FIELD_IDS = {
     name:         "entry.YOUR_ENTRY_ID",
     phone:        "entry.YOUR_ENTRY_ID",
     email:        "entry.YOUR_ENTRY_ID",
     // ... etc
   };
   ```
   Replace `viewform` with `formResponse` in the action URL.

---

## 📞 Update Contact Details

Open `components/Contact.tsx` and update the `CONTACT` object at the top:

```ts
const CONTACT = {
  phone: "+234 800 000 0000",          // ← Real phone
  email: "hello@diegosfoods.com",      // ← Real email
  whatsapp: "https://wa.me/234XXXXXXXX", // ← Real WhatsApp number (no spaces/+)
  address: "Your full address here",
  hours: "Mon – Sat: 7:00 AM – 8:00 PM",
};
```

---

## 📸 Adding Real Photos

Replace the emoji/gradient placeholders in `components/Gallery.tsx`:

1. Add your photos to `/public/gallery/`
   ```
   public/gallery/jollof-rice.jpg
   public/gallery/event-catering.jpg
   public/gallery/kitchen.jpg
   ...
   ```

2. In `Gallery.tsx`, replace the emoji items with Next.js `<Image />` components:
   ```tsx
   import Image from "next/image";

   // Replace:
   { icon: "🍲", bg: "...", label: "Signature Dishes" }

   // With:
   <Image src="/gallery/jollof-rice.jpg" alt="Jollof Rice" fill style={{ objectFit: "cover" }} />
   ```

Do the same in `Menu.tsx` for meal images.

---

## 🚀 Deploy to Vercel

### Option A — Vercel Dashboard (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Diego's website"
   git remote add origin https://github.com/YOUR_USERNAME/diegos-website.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js
5. Your site is live! 🎉

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow the prompts
```

---

## 🌐 Custom Domain

After deploying to Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add `diegosfoods.com` (or your domain)
3. Update your domain registrar's DNS to point to Vercel

---

## 📊 Google Analytics

Add your GA4 Measurement ID to `app/layout.tsx`:

```tsx
// Add inside <head> in layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="ga">
  {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
</Script>
```

---

## ✅ Pre-Launch Checklist

- [ ] Update phone number in `Contact.tsx`
- [ ] Update email in `Contact.tsx`
- [ ] Update WhatsApp number in `Contact.tsx`
- [ ] Update physical address in `Contact.tsx`
- [ ] Set up Google Form and update `BookingFunnel.tsx`
- [ ] Add real food photos to `/public/gallery/`
- [ ] Update menu items/prices if needed in `Menu.tsx`
- [ ] Add testimonials from real customers in `Testimonials.tsx`
- [ ] Add Google Analytics ID to `layout.tsx`
- [ ] Deploy to Vercel
- [ ] Connect custom domain

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Google Fonts | Playfair Display + DM Sans |
| Vercel | Hosting & deployment |
| Google Forms | Booking form backend (no server needed) |

---

## 📬 Support

Built for Diego's Bakery & Bistro.
For updates or changes, open a new chat and share this codebase.
