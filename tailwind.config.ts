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
        bg: {
          primary: "#080808",
          secondary: "#111111",
        },
        surface: "#181818",
        glass: {
          surface: "rgba(255, 255, 255, 0.055)",
          border: "rgba(255, 255, 255, 0.12)",
          hover: "rgba(255, 255, 255, 0.08)",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#929292",
          muted: "#686868",
        },
        accent: {
          silver: "#C4C4C4",
          highlight: "#FFFFFF",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        "glass-sm": "0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-md": "0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "glass-lg": "0 12px 48px -4px rgba(0, 0, 0, 0.7), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.2)",
        "silver-glow": "0 0 30px -5px rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
