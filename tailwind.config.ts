import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbfbfd',
        foreground: '#1d1d1f',
        surface: '#ffffff',
        accent: '#06c',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        rosette: ['var(--font-rosette)', 'serif'],
        delius: ['var(--font-delius)', 'cursive'],
        montagu: ['var(--font-montagu)', 'serif'],
        antonio: ['var(--font-antonio)', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
