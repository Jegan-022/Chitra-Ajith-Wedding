/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f5ddb0',
          300: '#eec47f',
          400: '#e5a84d',
          500: '#d4882a',
          600: '#b86b1f',
          700: '#8f4f1a',
          800: '#6b3a17',
          900: '#4a2812',
        },
        ivory: '#FFFFF0',
        pastel: {
          pink: '#FFD6E7',
          peach: '#FFCBA4',
          lavender: '#E8D5FF',
          rose: '#FFC0CB',
          blush: '#FFF0F3',
        },
        gold: {
          light: '#F5DDBB',
          DEFAULT: '#C9A84C',
          dark: '#A07830',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        elegant: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(201,168,76,0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(201,168,76,0.9), 0 0 60px rgba(201,168,76,0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5ddbb, #c9a84c, #a07830)',
        'rose-gradient': 'linear-gradient(135deg, #FFD6E7, #FFCBA4)',
        'dream-gradient': 'linear-gradient(135deg, #fff0f3, #ffd6e7, #e8d5ff)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
