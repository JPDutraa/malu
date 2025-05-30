/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#A7B67A',
        secondary: '#A9B388',
        background: '#fffafa',
        accent1: '#C4661F',
        accent2: '#D2AB80',
        textPrimary: '#3B8792',
        textSecondary: '#725C3A',
        neutral: '#E5E0D8',
      },
      fontFamily: {
        display: ['"Playfair Display"','Montserrat', 'serif'],
        body: ['"Lato"', '"Open Sans"','Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
