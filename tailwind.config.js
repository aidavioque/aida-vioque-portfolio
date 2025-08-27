const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    ,
    'components/**/*.{ts,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': ['42px', '46px'],
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': ['84px', '76px'],
    },
    colors: {
      // Explicitly include necessary colors from tailwindcss/colors
      // and use new names for deprecated ones.
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray, // Uses the new 'gray' (formerly coolGray)
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      sky: colors.sky, // New name for lightBlue
      stone: colors.stone, // New name for warmGray
      neutral: colors.neutral, // New name for trueGray
      slate: colors.slate, // New name for blueGray
      // Remove ...colors spread to avoid pulling in deprecated names

      // Custom/project-specific colors below
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      primary: '#020C14', // This overrides tailwind's primary if it exists
      soft: '#062134',
      primaryButton: '#0B4168',
      background: '#fff', // This overrides tailwind's background if it exists
      // Custom gray palette
      // Note: The 'gray' from tailwindcss/colors is already included above.
      // This custom 'gray' will take precedence for classes like 'text-gray-900'.
      gray: {
        900: '#171923',
        800: '#1a202c',
        700: '#2d3748',
        600: '#4a5568',
        500: '#718096',
        400: '#A0AEC0',
        300: '#CBD5E0',
        200: '#e2e8f0',
        100: '#edf2f7',
        50: '#f6f8fb',
      },
      cream: '#f8eee3',
      infoBg: '#3B4660',
      primary: '#2a8288',
      index: '#4EC2C0',
      // New colors from Figma design
      syneBlue: '#15A5AE', // Used for hero antetitle, nav button
      brandBlack: '#052123', // Dark text color for logo, nav links
      tagAquaBg: '#6DDBF4', // Background for project card tags
      tagAquaText: '#063844', // Text and border for project card tags
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-syne)', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        main: '0px 4px 20px rgba(74, 91, 102, 0.25)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
