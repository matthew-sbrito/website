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
        main: 'var(--main)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        cursor: {
          to: { opacity: '0' },
        },
      },
      animation: {
        cursor: 'cursor 750ms infinite',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
};
export default config;
