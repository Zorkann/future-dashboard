/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.5rem', '0.75rem'],
      },
      animation: {
        'bubble-up': 'bubble-up infinite',
        'slide-left': 'slide-left infinite 5s linear 1.5s',
      },
      keyframes: {
        'bubble-up': {
          '0%': {
            transform: 'scale(1)',
          },
          '10%': {
            transform: 'scale(2)',
          },
          '30%, 100%': {
            transform: 'scale(1)',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary), <alpha-value>)',
          400: 'rgb(var(--color-primary-400), <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary), <alpha-value>)',
          700: 'rgb(var(--color-secondary-700), <alpha-value>)',
          800: 'rgb(var(--color-secondary-800), <alpha-value>)',
        },
        default: {
          DEFAULT: 'rgb(var(--color-default), <alpha-value>)',
          800: 'rgb(var(--color-default-800), <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgb(var(--color-background), <alpha-value>)',
        },
        text: {
          DEFAULT: 'rgb(var(--color-text), <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
