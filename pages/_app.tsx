import '../styles/globals.css';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AnimatePresence } from 'framer-motion';
import AppLayout from '@layouts/AppLayout';
import theme from '@utils/theme';
import Fonts from '@utils/fonts';
import { useRef } from 'react';

const App = ({ Component, pageProps, router }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current)
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    });
  return (
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
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} key={router.route} />
            </Hydrate>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
};
App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default App;
