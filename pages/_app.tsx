import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
  DehydratedState,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AnimatePresence } from 'framer-motion';

import AppLayout from '@layouts/AppLayout';
import Fonts from '@utils/fonts';
import { useRef } from 'react';
import Chakra from '@components/Chakra';

interface AppPageProps {
  cookies?: string;
  dehydratedState?: DehydratedState;
}

interface MyAppProps extends AppProps {
  pageProps: AppPageProps;
}

const App = ({ Component, pageProps, router }: MyAppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current)
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    });
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <AppLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial
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
    </Chakra>
  );
};

export { getServerSideProps } from '@components/Chakra';

export default App;
