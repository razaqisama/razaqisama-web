import type { Config } from 'tailwindcss';
/* eslint-disable global-require */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: {
          500: '#7672ec',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            h1: {
              color: '#7672ec',
              textAlign: 'center',
            },
            h2: {
              color: '#7672ec',
            },
            h3: {
              color: '#7672ec',
            },
            h4: {
              color: '#7672ec',
            },
            h5: {
              color: '#7672ec',
            },
            h6: {
              color: '#7672ec',
              textAlign: 'center',
            },
            blockquote: {
              color: '#fff',
            },
            code: {
              color: '#fff',
            },
            a: {
              color: '#7672ec',
            },
            strong: {
              color: '#7672ec',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
