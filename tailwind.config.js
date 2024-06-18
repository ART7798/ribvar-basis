/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dana: ["DanaRegular"],
      },
      colors: {
        rbvmain: "#122139",
        rbvhelper: "#1e3354",
        rbvhelpersecondary: "#6c83a7",
        rbvblue: "#301ebd",
        rbvtxtblue: "#778dbc",
        rbvtxtprimary: "#313131",
        rbvtxtsecondary: "#5b5b5b",
        rbvgray: "#e2e2e2",
        rbvbgmain: "#fafafa",
        rbvbgsecondary: "#edf5f6",
        rbvbgaccent: "#ffbf1c",
        rbvlinearblack: "#122139bb",
        rbvtxtgray: "#cbcbcb",
        rbvdarkmain: "#0E1B30",
      },
      spacing: {
        73: "294px",
        75: "310px",
        85: "347px",
        130: "650px",
      },
      screens: {
        xs: "480px",
      },
    },
    plugins: [],
  },
};
