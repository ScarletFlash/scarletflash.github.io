import { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
      },
    },
  },
} satisfies Config;
