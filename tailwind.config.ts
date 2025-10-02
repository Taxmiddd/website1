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
        background: "#0a120d",
        foreground: "#dcf2e4",
        card: "#0f1b14",
        "card-foreground": "#dcf2e4",
        popover: "#0f1b14",
        "popover-foreground": "#dcf2e4",
        primary: "#1f5f46",
        "primary-foreground": "#f0f9f4",
        secondary: "#2f6f55",
        "secondary-foreground": "#f0f9f4",
        muted: "#0e1a12",
        "muted-foreground": "#bce5cc",
        accent: "#c6a858",
        "accent-gold": "#c6a858",
        "accent-foreground": "#0a120d",
        destructive: "#6f1f2a",
        "destructive-foreground": "#f0f9f4",
        border: "#2f6f55",
        input: "#0f1b14",
        ring: "#3a8c6a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
