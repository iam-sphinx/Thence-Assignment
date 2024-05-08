/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        grace: ["Covered By Your Grace", "cursive"],
        switzer: ["Switzer", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 22.59px 36.14px 0px rgba(30, 30, 30, 0.09)",
      },
    },
  },
  plugins: [],
};
