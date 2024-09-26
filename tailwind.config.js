/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/*.jsx",
  ],
  theme: {
    extend: {
      animation:{
        'spinning': "spin 2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}

