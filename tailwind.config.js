/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '#scroll-content': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '#scroll-content::-webkit-scrollbar': {
          'display': 'none',             /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

