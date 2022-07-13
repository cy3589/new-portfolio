import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import AppLayout from '@layouts/AppLayout';
import theme from '@utils/theme';
import Fonts from '@utils/fonts';

const App = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <AppLayout router={router}>
      <Component {...pageProps} key={router.route} />
    </AppLayout>
  </ChakraProvider>
);

export default App;
