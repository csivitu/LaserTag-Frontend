/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gra-gray": "#171717",
        "diff-gray": "#788596",
        "laser-yellow": "#FFE81F",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
}
