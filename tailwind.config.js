/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"]
    },
    extend: {
      colors: {
        'primary': '#FB5E05',
        'active-button': '#000000',
        'secondary-button': '#828282'
      }
    },
  },
  plugins: [],
}