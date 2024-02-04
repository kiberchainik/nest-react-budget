/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    screens: {
      'xxs': '260px',
      // => @media (min-width: 260px) { ... }

      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '530px',
      // => @media (min-width: 530px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'lg2': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}