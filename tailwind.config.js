const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Inter var"],
        body: ["Inter var"],
      },
      fontSize: {
        "7xl": "8em",
      },
    },
  },
  variants: {},
  plugins: [],
};
