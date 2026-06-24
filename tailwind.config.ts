import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/i18n/**/*.{js,ts,jsx,tsx,mdx}',
    './messages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5D3A1A',
          'primary-foreground': '#FFFFFF',
          secondary: '#4A2E15',
          accent: '#F97316',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          900: '#111827',
        },
        semantic: {
          background: '#FFFFFF',
          foreground: '#111827',
          card: '#111827',
          'card-foreground': '#FFFFFF',
          muted: '#F8F9FA',
          'muted-foreground': '#6B7280',
          border: '#E5E7EB',
          input: '#E5E7EB',
          ring: '#5D3A1A',
          success: '#10B981',
          warning: '#F59E0B',
          destructive: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'site': '1440px',
      },
      borderRadius: {
        'none': '0',
      },
      boxShadow: {
        'card': '0 10px 15px rgba(17,24,39,0.1)',
        'lift': '0 20px 25px rgba(17,24,39,0.15)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [typography],
};

export default config;
