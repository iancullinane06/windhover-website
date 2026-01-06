/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': 'var(--color-dark-primary)',
        'primary': 'var(--color-primary)',
        'light-primary': 'var(--color-light-primary)',
        'tertiary': 'var(--color-tertiary)',
        'secondary': 'var(--color-secondary)',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.3s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        mono: 'var(--font-mono)',
        serif: 'var(--font-serif)',
        stencil: 'var(--font-stencil)',
      },
    },
  },
  plugins: [],
};