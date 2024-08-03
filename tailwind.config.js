/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js"],
  theme: {

    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        d2: ["28px", {
          lineHeight: "28px",
          fontWeight: "700",
        }],
        d5: ["19px", {
          lineHeight: "18px",
          fontWeight: "700",
        }],
        sm: ["16px", {
          lineHeight: "26px",
          fontWeight: "400",
        }],
      },
      textColor: {
        primary: "#282B42",
        secondary: "#4F568591",
        line: "#065C62 ",
        success: "#73cf42",
        heading: "#24315E",
        dark_color: "#1F2937",
        textGray: "#737373",
        mainColor: "#ebb434",
      },
      colors: {
        primary: "#FFE2C0",
        secondary: "#73cf42",
        secondary2: "#4F568591",
        line: "#065C62 ",
        heading: "#24315E",
        dark_color: "#1F2937",
        textGray: "#737373",
        mainColor: "#ebb434",
      },

      boxShadow: {
        sm: "0px 1px 3px 0px #03004717",
        DEFAULT: "0px 0px 10px 0px rgba(0, 0, 0, 0.06)",
        lg: "0px 8px 45px 0px #03004717",
      },
      animation: {
        slowbounce: 'bounce 4s infinite',
        slowerbounce: 'bounce 6s infinite',
        slowshake: 'shake 4s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
};
