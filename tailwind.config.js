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
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      xl2: ['24px', '32px'],
      xl3: ['30px', '36px'],
      xl4: ['36px', '40px'],
      xl5: ['48px', '1'],
      xl6: ['60px', '1'],
      xl7: ['72px', '1'],
      xl8: ['96px', '1'],
      xl9: ['128px', '1'],
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
      black: '900',
    },
    width: {
      fullscrn: 'calc( 100vw - 2rem )',
      full: '100%'
    },
    height: {
      xs: '2rem',
      sm: '4rem',
      full: '100%'
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
      },
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      }
    }
  },
  plugins: [],
};
