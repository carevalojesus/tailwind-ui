module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24274E',
        secondary: '#FFCD00',
        info: '#2fa3e6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}