/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        transparentGray: 'rgba(128, 128, 128, 0.8)',
      },
    },
  },
  plugins: [],
};
