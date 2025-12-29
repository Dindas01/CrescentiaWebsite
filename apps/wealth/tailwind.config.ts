import type { Config } from 'tailwindcss'
import baseConfig from '@crescentia/config/tailwind'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [baseConfig as Config],
  theme: {
    extend: {
      ...(baseConfig.theme?.extend || {}),
      animation: {
        'gradient-shift': 'gradient-shift 20s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 12s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(50px, -30px) rotate(3deg)' },
          '66%': { transform: 'translate(-30px, 40px) rotate(-3deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.05)' },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(1.08)' },
        },
      },
    },
  },
}

export default config
