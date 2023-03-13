import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    yellow: {
      '400': '#FFBA08',
      '300': 'rgb(255, 186, 8, 0.5)',
    },
    gray: {
      '700': '#47585B',
      '500': '#999999',
      '400': ' rgb(153,153,153, 0.5)',
      '200': '#DADADA',
      '50': '#F5F8FA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
        color: 'gray.700',
      },
    }),
  },
});
