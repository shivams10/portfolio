/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      'custom-light': '0 1px 10px #313131',
      'custom-dark': '0 1px 10px #ffffff'
    },
    fontFamily: {
      dmsans: ['DM Sans Arvo']
    },
    extend: {
      colors: {
        indigo: {
          DEFAULT: 'rgb(99 102 241)'
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125'
        }
      }
    }
  },
  variants: {
    extends: { boxShadow: ['dark'] }
  },
  plugins: []
};
