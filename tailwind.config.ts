import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4b9b6e", 
        secondary: "#4b5563",
        text: "#254d36",
      },
      borderRadius: {
        '20': '20px', 
        '10': '10px',
      },
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
