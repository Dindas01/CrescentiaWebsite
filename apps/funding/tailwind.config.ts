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
    },
  },
}

export default config
