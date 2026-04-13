/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f5f3ff',
          100: '#ede9fe',
          600: '#5b3df3',
          700: '#4b2cd8'
        },
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#6d4bff',
          600: '#5b3df3',
          700: '#4b2cd8',
          900: '#0b1220'
        }
      }
    },
  },
  plugins: [],
}
