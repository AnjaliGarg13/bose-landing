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
        void: "#08080A",
        surface: "#111114",
        raised: "#18181C",
        border: {
          subtle: "#1F1F24",
          DEFAULT: "#2A2A30",
        },
        text: {
          primary: "#F0EDE8",
          secondary: "#888890",
          muted: "#50505A",
        },
        accent: {
          warm: "#C4A97D",
          cool: "#6B7FA3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
