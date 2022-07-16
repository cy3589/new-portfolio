import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import AppLayout from '@layouts/AppLayout';
import theme from '@utils/theme';
import Fonts from '@utils/fonts';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <AppLayout router={router}>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AppLayout>
  </ChakraProvider>
);

export default App;
