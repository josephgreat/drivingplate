/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {opacity: .4},
          '100%': {opacity: 1}
        },
        animation: {
          fade: 'fade 1s ease-in-out',
        }
      }
    },
  },
  plugins: [],
}