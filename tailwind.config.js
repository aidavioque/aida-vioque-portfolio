const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#020C14',
      backround: '#fff',
      cream: '#f8eee3',
    },
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    extend: {},
  },
  plugins: [],
};
