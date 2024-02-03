/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}