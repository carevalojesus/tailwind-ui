const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      black: colors.black,
      'white': '#fff',
      'purple': '#6e275d',
      'rose:': '#e10229',
      'amber': '#e1b200',
      'pink': '#ff6fc0',
      'violet': '#d287dd',
      'yellow': '#ffe54a',
      'info': {
        500 : '#3dd7f3',
        900 : '#007eb1',
      },
      'danger': {
        500 : '#ff4453',
        900 : '#e10229',
      },
      'success': {
        500 : '#7ff1a3',
        900 : '#00ac59',
      },
      'warning': {
        500 : '#ff9400',
        900 : '#ff6109',
      },
    },
    extend: {
      colors: {
        primary: '#051c2c',
        secondary: '#d6a461',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
