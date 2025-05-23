/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'primary-light': 'var(--color-primary-light)',
        'tertiary': 'var(--color-tertiary)',
        'primary-bg': 'var(--color-primary-background)',
        'secondary-bg': 'var(--color-secondary-background)',
        'vibrant-bg': 'var(--color-vibrant-background)',
        'dull-bg': 'var(--color-dull-background)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
        'dark': 'var(--color-dark)',
        'frosted-glass': 'var(--color-frosted-glass)',
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
    },
  },
  plugins: [],
};