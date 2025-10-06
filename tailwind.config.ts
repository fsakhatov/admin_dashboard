import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        background: {
          light: "#f4f6fb",
          dark: "#0f172a",
        },
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(15, 23, 42, 0.3)",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [forms],
} satisfies Config;

export default config;
