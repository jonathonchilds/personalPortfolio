/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      kaushan: ["Kaushan Script", "cursive"],
      moirai: ["Moirai One", "cursive"],
      diphy: ["Diphylleia", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
