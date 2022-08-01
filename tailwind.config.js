/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comiccat: ["Comic_CAT", "sans-serif"],
        saotorpes: ["SaoTorpes", "cursive"]
      }
    },
  },
  plugins: [],
}
