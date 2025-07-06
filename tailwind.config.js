/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2C51A1',
        'custom-dark-blue': '#1B577E',
        'custom-orange': '#EE581B',
        'custom-dark-orange': '#EB5617',
        'custom-text': '#333333',
        'custom-button': '#1B5680',
        'custom-button-text': '#FEE9E7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};