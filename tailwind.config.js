const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#020C14',
      soft: '#062134',
      backround: '#fff',
      cream: '#f8eee3',
    },
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
};
