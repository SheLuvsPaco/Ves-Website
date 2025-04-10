/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1e3a8a',
          900: '#1e2a4a',
        },
        'orange': {
          500: '#f97316',
          600: '#ea580c',
        },
      },
    },
  },
  plugins: [],
};