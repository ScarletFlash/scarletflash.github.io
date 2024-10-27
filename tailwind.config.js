/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  keyframes: {
    moveUp: {
      "0%": { transform: "translateY(0)" },
      "100%": { transform: "translateY(100%)" },
    },
  },
  animation: {
    moveUp: "moveUp 1s ease-in-out infinite",
  },
};
