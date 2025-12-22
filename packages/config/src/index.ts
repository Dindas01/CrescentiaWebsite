/**
 * Crescentia Design System Configuration
 *
 * Centralized design tokens for all Crescentia websites
 */

export { colors, type ColorToken } from './colors'
export { typography, type TypographyToken } from './typography'
export { default as tailwindConfig } from './tailwind.config'

// Re-export everything as a single config object
export const crescentiaConfig = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
} as const
