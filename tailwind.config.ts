import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          200: '#AFAFAF',
          300: '#8C8C8C',
          400: '#6B6B6B',
          500: '#5A5A5A',
          550: '#4F4F4F',
          600: '#4A4A4A',
          650: '#3a3a3a',
          700: '#2C2C2C',
          800: '#202020',
          900: '#121212',
        },
        main: {
          500: '#54e8f2',
          600: '#3ed1da',
          700: '#2fb7c2',
          800: '#0094a6',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus-within'],
      borderColor: ['focus-within'],
    },
  },
  plugins: [],
}

export default config
