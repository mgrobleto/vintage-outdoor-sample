import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'default-btn' : '#BF8A26',
        'hover-btn': '#ae7120',
        'active-btn': '#8b531d',
        'second-default-btn': '#27CDF2',
        'second-hover-btn': '#058ab5',
        'second-active-btn': '#0c6e92'
      },
    },
  },
  plugins: [],
} satisfies Config;
