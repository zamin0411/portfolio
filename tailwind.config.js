/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFB5C5',
          'pink-light': '#FFE4EC',
          'pink-dark': '#F8A5B8',
          lavender: '#E6D5F5',
          'lavender-light': '#F3EBFF',
          'lavender-dark': '#D4B5F0',
          blue: '#B5D4FF',
          'blue-light': '#E4F0FF',
          'blue-dark': '#9BC4F7',
          mint: '#B5F5D4',
          peach: '#FFDAB9',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pastel': '0 4px 20px -2px rgba(255, 181, 197, 0.25), 0 2px 8px -2px rgba(230, 213, 245, 0.3)',
        'pastel-lg': '0 10px 40px -5px rgba(255, 181, 197, 0.2), 0 4px 15px -3px rgba(181, 212, 255, 0.25)',
        'pastel-hover': '0 20px 50px -10px rgba(255, 181, 197, 0.35), 0 8px 25px -5px rgba(230, 213, 245, 0.3)',
        'glass': '0 8px 32px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #FFE4EC 0%, #F3EBFF 50%, #E4F0FF 100%)',
        'gradient-pastel-alt': 'linear-gradient(180deg, #FFB5C5 0%, #E6D5F5 50%, #B5D4FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}
