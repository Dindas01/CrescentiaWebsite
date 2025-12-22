/**
 * Crescentia Brand Colors
 *
 * Primary palette with tints (60% and 20%)
 */

export const colors = {
  // Brand Primary - Yellow
  yellow: {
    DEFAULT: '#F5CF00',
    100: '#FFFBEB',  // 20% tint
    200: '#FFF4CC',  // 40% tint
    300: '#FAEDB3',  // 60% tint
    400: '#F8E666',  // 80% tint
    500: '#F5CF00',  // Brand primary
    600: '#D4B300',
    700: '#B39700',
    800: '#927B00',
    900: '#715F00',
  },

  // Dark - Backgrounds & Text
  dark: {
    DEFAULT: '#12141C',
    50: '#E8E9EA',
    100: '#D1D2D5',
    200: '#A3A5AB',
    300: '#757881',
    400: '#474B57',
    500: '#12141C',  // Brand dark
    600: '#0E1016',
    700: '#0B0C11',
    800: '#07080B',
    900: '#040406',
  },

  // White - Clean & Minimal
  white: {
    DEFAULT: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FEFEFE',
    300: '#FCFCFC',
    400: '#FAFAFA',
    500: '#F8F8F8',
  },

  // Semantic Colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
} as const

export type ColorToken = typeof colors

export default colors
