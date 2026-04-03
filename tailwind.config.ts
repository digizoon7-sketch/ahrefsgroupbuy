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
        background: "var(--background)",
        foreground: "var(--foreground)",
        /** Links, focus rings — clear blue, not too heavy */
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        /** Headings & strong text — soft slate-navy */
        navy: "#1e293b",
        /** CTAs — warm orange, slightly softer than pure orange-600 */
        accent: {
          DEFAULT: "#f97316",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
