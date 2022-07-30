/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lunchBox: "lunchBox",
      "north-font": "north-font",
    },

    extend: {
      colors: {
        yellow: "#FFC100",
        pink: "#FB51B9",
        blue: "#0388D4",
        gray: "#5A5959",
        "gray-100": "#EFEFEF",
        green: "#00C64C",
      },
    },
  },
  plugins: [],
};
