/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    animation: {
      slideInFromRight: "slideInFromRight 0.7s ease-out",
      slideInFromLeft: "slideInFromLeft 0.7s ease-out ",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
