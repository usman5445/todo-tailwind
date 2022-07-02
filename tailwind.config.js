/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: "Dosis",
        "dosis-mid": "Dosis Mid",
        "dosis-bold": "Dosis Bold",
        "dosis-bolder": "Dosis Bolder",
      },
    },
  },
  plugins: [],
};
