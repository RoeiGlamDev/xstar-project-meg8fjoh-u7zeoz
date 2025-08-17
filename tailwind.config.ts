import type { Config } from 'tailwindcss';

/
 * Tailwind CSS Configuration for CleanSSR
 * This configuration sets up a minimalistic design with custom colors
 * specific to CleanSSR, a technology-focused cleaning service.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#5B21B6', // Custom purple color for CleanSSR
          light: '#D8B4FE', // Light purple variant
        },
        white: '#FFFFFF', // White color for CleanSSR
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;