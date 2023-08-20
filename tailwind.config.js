/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'theme-color': '#fff7ed',
      primary: '#7c2d12',
      secondary: '#9a3412',
      tertiary: '#ffedd5',
      'inactive-grey': '#71717a',
      white: 'white',
      black: 'black',
      'header-footer-light': '#ffedd5',
      neutral: '#fafafa'
    },
    fontWeight: {
      thin: '100',
      'hair-line': '100',
      'extra-light': '200',
      light: '300',
      normal: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '700',
      'extra-bold': '800',
      black: '900'
    },
    width: {
      fullscrn: 'calc( 100vw - 2rem )',
    },
    height: {
      xs: '2rem',
      sm: '4rem',
    },
    maxWidth: {
      xs: '20rem',
    },
    padding: {
      xs: '4px',
      s: '8px'
    },
    margin: {
      xs: '0.5rem',
      sm: '1rem',
    },
    borderRadius: {
      lg: '0.5rem',
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)'
      }
    },
  },
  plugins: [],
};
