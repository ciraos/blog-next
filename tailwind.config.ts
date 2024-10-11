import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundColor: {
        "dacard": "#2c303f",
        "dacard1": "#90d9e9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ganyu5": "url('/ganyu5.avif')",
      },
      colors: {
        "miku-green": '#39c5bb',
      },
    },
    screens: {
      "max-320": { 'max': '320px' },
      "max-375": { 'max': '375px' },
      "max-425": { 'max': '425px' },
      "max-768": { 'max': '768px' },
      "max-1024": { 'max': '1024px' },
      "max-1440": { 'max': '1440px' },
    },
  },
  plugins: [],
};

export default config;
