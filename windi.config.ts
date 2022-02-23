import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';
import colors from 'windicss/colors';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  // preflight: false, // 是否重置css样式
  theme: {
    //   fontFamily: {
    //     sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
    //     serif: ['Montserrat', 'ui-serif', 'Georgia'],
    //     mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
    //   },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'red',
            a: {
              color: 'green',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { margin: '10px', color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
});
