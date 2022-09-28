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
        "dark-black": "#101010",
        "gray-modal": "#1C1C1C",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        arial: "Arial",
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
}
