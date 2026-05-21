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
        voya: {
          cream: "#FFFCE1",
          clay: "#B35C44",
          gold: "#D4A017",
          teal: "#2A4D50",
          blue: "#4361EE",
          pink: "#FF006E",
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000000",
        "brutal-lg": "8px 8px 0px 0px #000000",
      },
      borderWidth: {
        3: "3px",
        4: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
