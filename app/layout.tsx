import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Diego's Bakery & Bistro – Sensationally Good.",
  description:
    "Diego's Bakery & Bistro offers professional food production and catering services for corporate clients and individuals. From bulk meals to event catering — we deliver quality you can taste.",
  keywords: [
    "catering services",
    "food supply",
    "corporate meals",
    "bulk food services",
    "event catering",
    "Diego's Bakery",
    "Lagos catering",
  ],
  openGraph: {
    title: "Diego's Bakery & Bistro – Sensationally Good.",
    description:
      "Professional catering and food production services. Corporate meals, event catering, bulk food preparation.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-dm antialiased`}>
        {children}
      </body>
    </html>
  );
}
