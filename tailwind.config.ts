import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          gold: '#d4af37',
          champagne: '#f4df9b',
          obsidian: '#080808',
          charcoal: '#111111',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212, 175, 55, 0.15), 0 24px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at top, rgba(212, 175, 55, 0.2), transparent 42%)',
      },
    },
  },
  plugins: [],
};

export default config;
