
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#723d9e',
          hover: '#5e3282',
          light: '#8b5bc2'
        },
        secondary: {
          DEFAULT: '#87872c',
          hover: '#6e6e24',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          surface: '#171717',
          lighter: '#262626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
