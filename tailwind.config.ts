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
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        accent: "#4dd4d4",
        dim: "rgba(245, 245, 245, 0.35)",
        border: "rgba(245, 245, 245, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        hero: "clamp(3rem, 8vw, 8rem)",
        subtitle: "clamp(1.5rem, 3vw, 2.5rem)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
