/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        /* Helvetica Now: add @font-face in index.css when you have licensed files; until then macOS uses Neue. */
        display: ['"Helvetica Now"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        orange: "#08608f",
        dark: "#0D0D0D",
        cream: "#FAF7F2",
        mid: "#6B6B6B",
        border: "#E5E5E5",
      },
      maxWidth: {
        content: "860px",
      },
    },
  },
  plugins: [],
};
