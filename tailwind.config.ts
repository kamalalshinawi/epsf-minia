import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B2545',
        secondary: '#B08D57',
        background: { DEFAULT: '#FFFFFF', muted: '#F4F5F7' },
        text: '#1E293B',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      keyframes: {
        'hero-enter': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hero-enter': 'hero-enter 500ms ease-out both',
      },
    },
  },
} satisfies Config
