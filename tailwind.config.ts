import type { Config } from "tailwindcss"

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
        "neon-red": "#A855F7",
        "neon-purple": "#A855F7",
        "neon-dark": "#7C3AED",
        "neon-mid": "#9333EA",
        "neon-light": "#C084FC",
        "neon-pale": "#E9D5FF",
        "bg-void": "#000000",
        "bg-surface": "#0A0A0A",
        "bg-elevated": "#111111",
        "border-base": "#1C1C1C",
        "border-accent": "rgba(168, 85, 247, 0.3)",
        "text-white": "#FFFFFF",
        "text-dim": "#B8B8B8",
        "text-ghost": "#858585",
        wire: "#2A2A2A",
      },
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
}

export default config
