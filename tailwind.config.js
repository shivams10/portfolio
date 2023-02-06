/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    fontFamily: {
      dmsans: ['DM Sans Arvo']
    },
    extend: {
      colors: {
        indigo: {
          DEFAULT: 'rgb(99 102 241)'
        }
      }
    }
  },
  plugins: []
};
