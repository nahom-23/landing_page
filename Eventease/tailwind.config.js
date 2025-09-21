/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D3063',
        'dark': '#000000',
        'light-gray': '#1A1A1A',
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        'positivus': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}