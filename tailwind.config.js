/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-1': '#C1121F',
        'blue-1': '#003049',
        'blue-2':'#1B263B',
        'white-1': '#FDF0D5',
      }
    },
  },
  plugins: [],
}