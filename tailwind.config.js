/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgblue': '#CDDEFF',
        'black': '#2B2928',
        'blue': '#CDDEFF',
        'red': '#FEB2AB',
        'darkred': "#FF4242",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        londrina: ["Londrina Solid", "cursive"],
      },
      animation: {
        'bounce-fast': 'bounce 0.7s infinite',
      }
    },
  },
  plugins: [],
}