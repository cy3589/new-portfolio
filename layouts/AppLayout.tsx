import { FC, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import Navbar from '@components/Navbar';

interface ChildrenFC {
  children?: ReactNode | ReactNode[];
  router: Router;
}

const AppLayout: FC<ChildrenFC> = ({ children, router }) => (
  <Box as="main">
    <Head>
      <meta name="viewport" content="width=divice-width, initial-scale=1" />
      <title>Chad Portfolio</title>
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
);

export default AppLayout;
