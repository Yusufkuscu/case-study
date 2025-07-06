/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFC497',
        'yellow-gold': '#EFC497',
        'white-gold': '#F9F9F9',
        'rose-gold': '#E1A4A9',
      },
      fontFamily: {
        'avenir': ['Avenir', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'montserrat': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'heading': '45px',
        'product-title': '15px',
        'product-price': '15px',
        'color-label': '12px',
        'rating': '14px',
      },
      fontWeight: {
        'book': '300',
        'medium': '500',
        'regular': '400',
      },
      spacing: {
        '15': '3.75rem', // 60px
        '70': '17.5rem', // 280px
        '75': '18.75rem', // 300px
      },
    },
  },
  plugins: [],
}
