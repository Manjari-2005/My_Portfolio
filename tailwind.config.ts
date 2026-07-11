import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F19",       // deep charcoal background
        surface: "#11162447",  // translucent panel
        surface2: "#141a2b",
        border: "#232a3d",
        ink: "#E6E9F2",        // primary text
        muted: "#8891A7",      // secondary text
        accent: "#7C3AED",     // electric purple
        accent2: "#A78BFA",
        cyan: "#06B6D4",       // secondary accent
        signal: "#34D399",     // "online" status green
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(124,58,237,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(124,58,237,0.45)",
        "glow-cyan": "0 0 60px -12px rgba(6,182,212,0.4)",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
