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
        main: "#26c6da",
        primary: "#4dd0e1", 
        secondary: "#b2ebf2",
        text: "#082a2e",
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
