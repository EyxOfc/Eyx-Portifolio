/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'prsn': '385px'
    },
    extend: {
      darkMode: 'class',
      colors: {
        'pl': '#F8FAFC',
        'sl': '#CBD5E1',
        'tl': '#0EA5E9',
        'pd': '#F8FAFC',
        'sd': '#0F172A',
        'td': '#0EA5E9',
      }
    },
    fontFamily: {
      'Sora': 'Sora',
    }
  },
  plugins: [],
}