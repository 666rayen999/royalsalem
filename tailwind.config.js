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
        darkest: '#1f1f1f',
        lightest: '#f6f6f6',
        x1: '#84b4dc',
        x2: '#faf39b',
        x3: '#9ca4cc',
        x4: '#655035'
      },
      screens: {
        'tablet': '720px',
        'desktop': '1080px'
      },
      borderRadius: {
        'full': '100%',
        'pill': '666rem'
      }
    }
  },
  plugins: [],
}
