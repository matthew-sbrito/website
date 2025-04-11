import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main: 'rgb(var(--main-rgb) / <alpha-value>)',
        'main-dark': 'rgb(var(--main-dark-rgb) / <alpha-value>)',
        'main-light': 'rgb(var(--main-light-rgb) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        cursor: {
          to: { opacity: '0' },
        },
        'pulse-bordered': {
          '0%': {
            transform: 'scale(0.97)',
            'box-shadow': '0 0 0 0 rgb(var(--main-rgb) / 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            'box-shadow': '0 0 0 10px rgb(var(--main-rgb) / 0)',
          },
          '100%': {
            transform: 'scale(0.97)',
            'box-shadow': '0 0 0 0 rgb(var(--main-rgb) / 0)',
          },
        },
      },
      animation: {
        cursor: 'cursor 750ms infinite',
        'pulse-bordered': 'pulse-bordered 1.5s infinite',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
};
export default config;
