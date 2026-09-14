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
    },
  },
} satisfies Config
