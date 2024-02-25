/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        'white': '#F8FAFC',
        'gray': '#CBD5E1',
        'sky': '#0EA5E9',
        'slate': '#0F172A'
      }
    },
    fontFamily: {
      'Sora': 'Sora',
    }
  },
  plugins: [],
}