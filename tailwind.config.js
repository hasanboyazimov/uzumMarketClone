/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        "sm-20": "20em", // Custom breakpoint for 20em
        "sm-23": "23em", // Custom breakpoint for 23em
        "sm-37": "37em", // Custom breakpoint for 37em
        "md-960": "960px", // Custom breakpoint for 960px
        "lg-64": "64em", // Custom breakpoint for 64em
      },
    },
  },
  plugins: [require("daisyui")],
};
