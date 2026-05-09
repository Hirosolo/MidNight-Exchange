import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#00dddd",
        "surface-dim": "#131314",
        "on-background": "#e5e2e3",
        "on-secondary": "#520072",
        "inverse-primary": "#006a6a",
        "on-primary-fixed": "#002020",
        "on-tertiary-fixed": "#161c22",
        background: "#080809",
        "outline-variant": "#3a4a49",
        tertiary: "#ffffff",
        "on-tertiary-fixed-variant": "#41474e",
        "on-primary-fixed-variant": "#004f4f",
        "primary-fixed-dim": "#00dddd",
        "on-surface-variant": "#b9cac9",
        "inverse-on-surface": "#313031",
        "tertiary-container": "#dde3eb",
        "primary-container": "#00fbfb",
        "on-error": "#690005",
        surface: "#1a1d21",
        "on-tertiary-container": "#5f656c",
        "surface-variant": "#353436",
        secondary: "#ebb2ff",
        "surface-container-low": "#1c1b1d",
        "on-primary": "#003737",
        "tertiary-fixed": "#dde3eb",
        "on-secondary-fixed-variant": "#74009f",
        "surface-container-lowest": "#0e0e0f",
        "on-secondary-container": "#fff6fc",
        "on-secondary-fixed": "#320047",
        "inverse-surface": "#e5e2e3",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#00fbfb",
        "on-primary-container": "#007070",
        "on-surface": "#e5e2e3",
        "error-container": "#93000a",
        "secondary-container": "#b600f8",
        outline: "#839493",
        "secondary-fixed-dim": "#ebb2ff",
        "secondary-fixed": "#f8d8ff",
        "on-tertiary": "#2b3137",
        "surface-container": "#1a1d21",
        "tertiary-fixed-dim": "#c1c7cf",
        "surface-container-highest": "#353436",
        "surface-container-high": "#2a2a2b",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        sm: "12px",
        xs: "4px",
        xl: "80px",
        md: "24px",
        lg: "48px",
        base: "8px",
        gutter: "24px",
        margin: "32px",
      },
      fontFamily: {
        "display-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "data-mono": ["JetBrains Mono", "monospace"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "body-base": ["Geist", "sans-serif"],
      },
      fontSize: {
        "label-caps": [
          "12px",
          {
            lineHeight: "1.0",
            letterSpacing: "0.1em",
            fontWeight: "700",
          },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "body-base": [
          "16px",
          {
            lineHeight: "1.6",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "1.2",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
        "data-mono": [
          "14px",
          {
            lineHeight: "1.4",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
