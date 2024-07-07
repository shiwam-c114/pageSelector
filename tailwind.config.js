/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
       boxShadow: {
        'custom': '0px 0px 3px -1px rgba(0, 0, 0, 0.2), 0 6px 12px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

