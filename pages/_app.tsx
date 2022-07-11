import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import AppLayout from '@layouts/AppLayout';

const App = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider>
    <AppLayout router={router}>
      <Component {...pageProps} key={router.route} />
    </AppLayout>
  </ChakraProvider>
);

export default App;
