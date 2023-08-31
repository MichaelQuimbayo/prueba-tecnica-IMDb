/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '100%': { transform: 'translateX(10%)' },
          '0%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 30s ease-in-out linear',
      }
    },
  },
  plugins: [],
}

