/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      first: {
        DEFAULT: "#4fff64",
        dark: "#091e0c",
        light: "#c1ffc8"
      }
      }
    },
  },
  plugins: [],
}