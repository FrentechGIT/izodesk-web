import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#dc2626", // červená
          dark: "#b91c1c", // tmavší červená
          light: "#f87171", // světlejší červená (60% odstín)
          lighter: "#fca5a5", // ještě světlejší (60% odstín)
        },
      },
    },
  },
  plugins: [],
};
export default config;
