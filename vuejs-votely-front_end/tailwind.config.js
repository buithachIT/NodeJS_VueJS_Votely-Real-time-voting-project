module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./vueform.config.js", // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@vueform/vueform/tailwind")],
};
