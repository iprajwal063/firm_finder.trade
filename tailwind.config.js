/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: 'hsl(0, 0%, 95%)',
          100: 'hsl(0, 0%, 90%)',
          200: 'hsl(0, 0%, 80%)',
          300: 'hsl(0, 0%, 70%)',
          400: 'hsl(0, 0%, 60%)',
          500: 'hsl(0, 0%, 50%)',
          600: 'hsl(0, 0%, 40%)',
          700: 'hsl(0, 0%, 15%)',
          800: 'hsl(0, 0%, 10%)',
          900: 'hsl(0, 0%, 7%)',
          950: 'hsl(0, 0%, 4%)',
        },
        accent: {
          50: 'hsl(15, 100%, 95%)',
          100: 'hsl(15, 100%, 90%)',
          200: 'hsl(15, 100%, 80%)',
          300: 'hsl(15, 100%, 70%)',
          400: 'hsl(15, 100%, 60%)',
          500: 'hsl(15, 100%, 50%)',
          600: 'hsl(15, 100%, 45%)',
          700: 'hsl(15, 100%, 40%)',
          800: 'hsl(15, 100%, 30%)',
          900: 'hsl(15, 100%, 20%)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 127, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 127, 0, 0.8)' },
        },
        slideUp: {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        smooth: '300ms',
      },
    },
  },
  plugins: [],
}
