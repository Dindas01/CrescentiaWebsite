import type { Config } from 'tailwindcss'
import colors from './colors'
import typography from './typography'

/**
 * Shared Tailwind CSS configuration for all Crescentia apps
 *
 * Import this in your app's tailwind.config.ts:
 * import baseConfig from '@crescentia/config/tailwind'
 */

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        yellow: colors.yellow,
        dark: colors.dark,
        white: colors.white,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
        info: colors.info,
      },
      fontFamily: {
        sans: typography.fonts.sans,
        mono: typography.fonts.mono,
      },
      fontSize: typography.fontSizes,
      fontWeight: typography.fontWeights,
      letterSpacing: typography.letterSpacing,
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
}

export default config
