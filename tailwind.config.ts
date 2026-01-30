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
        // Custom Brand Colors from design-plan.ts
        creme: "#F7EDC2",
        limette: "#E0E793",
        orange: "#EB5729",
        burgund: "#4F1B37",
        dunkelgruen: "#203D36",
      },
      fontFamily: {
        // Primary Font: Casta (Variable Font) - Headlines, Display-Text
        primary: ["Casta", "serif"],
        // Secondary Font: Space Mono - Details, Labels
        secondary: ["Space Mono", "monospace"],
      },
      fontSize: {
        // Typography Scale from design-plan.ts
        // Hero Headline
        "hero-desktop": ["120px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        // Section Headlines
        "section-desktop": ["64px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-mobile": ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        // Sub-headlines
        "sub-desktop": ["32px", { lineHeight: "1.3" }],
        "sub-mobile": ["24px", { lineHeight: "1.3" }],
        // Body Text
        "body-desktop": ["18px", { lineHeight: "1.6" }],
        "body-mobile": ["16px", { lineHeight: "1.6" }],
        // Label Text
        "label-desktop": ["14px", { lineHeight: "1.4" }],
        "label-mobile": ["12px", { lineHeight: "1.4" }],
        // Small Text
        "small-desktop": ["12px", { lineHeight: "1.4" }],
        "small-mobile": ["10px", { lineHeight: "1.4" }],
      },
      spacing: {
        // Spacing System from design-plan.ts
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
      },
      maxWidth: {
        container: "1440px",
      },
      animation: {
        // Custom Animations
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
