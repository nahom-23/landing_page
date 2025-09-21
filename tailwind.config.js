/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#B9FF66',
        'dark': '#191A23',
        'light-gray': '#F3F3F3',
      },
      fontFamily: {
        'positivus': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}