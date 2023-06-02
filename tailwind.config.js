const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#0b4168',
      backround: '#fff',
      cream: '#f8eee3',
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {},
  },
  plugins: [],
};
