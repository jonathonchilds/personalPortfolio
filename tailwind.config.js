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

    extend: {
      colors: {
        sungold: "#F7AB0A",
        offwhite: "#fff3c2",
        purple: "#5c0af7",
      },
    },
  },
  plugins: [],
};
