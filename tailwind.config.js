/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    color: {
      primary: 'red',
      white: 'white',
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
      xs: '1rem',
    },
    margin: {
      xs: '0.5rem',
      sm: '1rem',
    },
    borderRadius: {
      lg: '0.5rem',
    },
    extend: {},
  },
  plugins: [],
};
