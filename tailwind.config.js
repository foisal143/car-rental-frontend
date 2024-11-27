/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4c31',
        text: '#817f91',
      },
      fontFamily: {
        heading: 'Poppins',
        text: 'Roboto',
      },
    },
  },
  plugins: [require('daisyui')],
};
