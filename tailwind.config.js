/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1500px",
        xl: "1500px",
        "2xl": "1500px",
      },
    },
    extend: {},
  },
  plugins: [],
};
