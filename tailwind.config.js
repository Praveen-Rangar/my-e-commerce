module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {},

    colors: {
      primary: {
        300: "rgb(255, 111, 0)",
        500: "rgb(255,81,81)",
        700: "rgb(255,63,38)",
      },

      white: "rgb(255,255,255)",
      black: "rgb(0,0,0)",
      gray: {
        200: "rgb(244,245,246)",
        500: "rgb(65,81,97)",
        100: "rgba(0,0,0,0.01)",
        300: "rgb(169,169,169)",
        50: "rgb(211,206,210)",
        400: "rgb(156,163,175)",
      },
      violet: "rgb(129, 140, 248)",
    },
    fontFamily: {
      body: ["Poppins"],
    },
  },

  plugins: [],
};
