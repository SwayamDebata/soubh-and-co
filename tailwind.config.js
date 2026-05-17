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
        comic: ['"Bangers"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        orange: "#08608f",
        terracotta: "#B85C38",
        dark: "#0D0D0D",
        cream: "#FAF7F2",
        mid: "#6B6B6B",
        border: "#E5E5E5",
      },
      maxWidth: {
        content: "860px",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-y-delayed": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer-x": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "story-enter": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "story-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "float-y": "float-y 4.5s ease-in-out infinite",
        "float-y-slow": "float-y-delayed 5.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.55s ease-out forwards",
        "shimmer-slow": "shimmer-x 8s linear infinite",
        "story-enter": "story-enter 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "story-scan": "story-scan 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
