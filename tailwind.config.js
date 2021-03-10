const colors = require("tailwindcss/colors");

module.exports = {
 purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
 darkMode: "media", // or 'media' or 'class'
 theme: {
  colors: {
   ...colors,
   primary: "#292929",
   transparent: "transparent",
  },
  extend: {},
 },
 variants: {
  extend: { backgroundColor: ["active"] },
 },
 plugins: [],
};
