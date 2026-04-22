import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#9B1C1C",
          dark: "#7A1515",
          light: "#C23B3B",
        },
        gold: {
          DEFAULT: "#D4A017",
          light: "#F0C040",
        },
        cream: {
          DEFAULT: "#FDF8F0",
          dark: "#F5EDD8",
        },
        brand: {
          dark: "#1A0A0A",
          text: "#2D1515",
          muted: "#7A6060",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
