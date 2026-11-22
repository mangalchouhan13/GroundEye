import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF7",
          100: "#F8F5EE",
          150: "#F4F0E6",
          200: "#EFECE3",
          300: "#E4DFD3",
          400: "#D3CCBE",
          500: "#B8B0A0",
        },
        charcoal: {
          900: "#141413",
          850: "#1C1C1A",
          800: "#242422",
          700: "#383834",
          600: "#52524E",
          500: "#73736D",
        },
        gold: {
          100: "#F7F2E7",
          200: "#ECE1C9",
          300: "#DFCBA6",
          400: "#CFB483",
          500: "#B89360",
          600: "#9C7948",
          700: "#7A5C33",
        },
        navy: {
          950: "#060A12",
          900: "#0B1328",
          850: "#111B35",
          800: "#18264A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "Cinzel", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(28, 25, 23, 0.07)",
        "luxury-hover": "0 20px 50px -10px rgba(28, 25, 23, 0.12)",
        gold: "0 10px 30px -10px rgba(184, 147, 96, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
