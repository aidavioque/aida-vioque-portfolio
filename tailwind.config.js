const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#020C14',
      soft: '#062134',
      primaryButton: '#0B4168',
      background: '#fff',
      gray: '#4A5B66',
      cream: '#f8eee3',
    },
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    extend: {
      boxShadow: {
        main: '0px 4px 20px rgba(74, 91, 102, 0.25)',
      },
    },
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
