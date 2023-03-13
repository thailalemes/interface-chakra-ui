import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../styles/swiper/styles.scss';

import NextNProgress from 'nextjs-progressbar';
import ToggleColorMode from '../components/ToggleColorMode';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ToggleColorMode />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
