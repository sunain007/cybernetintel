/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: 'rgb(253, 253, 253)',
        accent: 'rgb(0, 174, 193)',
        dark: 'rgb(1, 32, 64)',
        cyan: {
          500: 'rgb(0, 174, 193)',
          600: 'rgb(0, 150, 167)',
          400: 'rgb(34, 197, 218)',
          50: 'rgba(0, 174, 193, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};