import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
    },
    '[id]': {
      scrollMarginTop: '96px',
    },
    '::selection': {
      backgroundColor: '#25c7a7',
      color: '#07111f',
    },
    '::-moz-selection': {
      backgroundColor: '#25c7a7',
      color: '#07111f',
    },
    '@keyframes subtleGlow': {
      '0%, 100%': {
        boxShadow: '0 4px 14px rgba(37, 199, 167, 0.2)',
      },
      '50%': {
        boxShadow: '0 6px 22px rgba(37, 199, 167, 0.48)',
      },
    },
  },
  theme: {
    tokens: {
      colors: {
        pct: {
          50: { value: '#e6fbf6' },
          400: { value: '#68e7cc' },
          500: { value: '#25c7a7' },
          700: { value: '#087c69' },
          950: { value: '#07111f' },
        },
      },
      fonts: {
        body: { value: '"DM Sans", sans-serif' },
        heading: { value: '"Space Grotesk", sans-serif' },
      },
    },
  },
});
