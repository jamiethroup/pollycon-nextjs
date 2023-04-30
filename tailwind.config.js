/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['var(--font-outfit)'], 
      'ebgaramond': ['var(--font-ebgaramond)'],
    },
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

