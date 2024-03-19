/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
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
        painterWhite: '#ffffff',
        primary: '#E55812',
        primaryDark: '#121212',
        expanderDark: '#B6BBC4'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
