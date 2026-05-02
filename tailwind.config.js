/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        orange: "#FF4F00",
        dark: "#0D0D0D",
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
