/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)']
      },
      colors: {
        painterOrange: '#fa4f41',
        painterDark: '#171717',
        painterGrey: '#232323',
        painterGreyLight: '#777',
        painterWhite: '#ffffff'
      }
    },
    screens: {
      '2xl': { max: '1600px' },
      // => @media(max-width: 1600px)
      xl: { max: '1279px' },
      // => @media(max-width: 1279px)
      lg: { max: '1023px' },
      // => @media(max-width: 1023px)
      md: { max: '767px' },
      // => @media(max-width: 767px)
      sm: { max: '639px' },
      // => @media(max-width: 639)
      xs: { max: '479px' }
      // => @media(max-width: 479px)
    }
  },
  plugins: []
};
