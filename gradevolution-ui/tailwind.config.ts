import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Ken-AI-inspired warm editorial palette
        cream: {
          DEFAULT: "#FAF4E8",
          50: "#FFFBF2",
          100: "#FAF4E8",
          200: "#F3EAD6",
          300: "#E9DDBF",
        },
        ink: {
          DEFAULT: "#0F0F0E",
          soft: "#2A2A28",
          muted: "#6B6B65",
        },
        coral: {
          DEFAULT: "#F26B5E",
          soft: "#F8A59B",
        },
        butter: {
          DEFAULT: "#F5D66A",
          soft: "#FBE8A5",
        },
        sage: {
          DEFAULT: "#8FA68A",
          soft: "#BFD1BA",
        },
        ochre: {
          DEFAULT: "#C4833C",
          soft: "#E2B57A",
        },
        navy: {
          DEFAULT: "#22304A",
          soft: "#4A5B78",
        },
        // Semantic aliases
        background: "#FAF4E8",
        foreground: "#0F0F0E",
        border: "#E9DDBF",
        input: "#E9DDBF",
        ring: "#0F0F0E",
      },
      fontFamily: {
        display: ["Georgia", "'Times New Roman'", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        display: ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        pill: "9999px",
      },
      boxShadow: {
        editorial: "0 1px 0 0 rgba(15,15,14,0.08), 0 8px 28px -12px rgba(15,15,14,0.18)",
        soft: "0 2px 14px -6px rgba(15,15,14,0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
