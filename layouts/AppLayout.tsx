import { FC, ReactNode } from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import dynamic from 'next/dynamic';
import Navbar from '@components/Navbar';
import VoxelDogLoader from '@components/VoxDogLoader';

const LazyVoxelDog = dynamic(() => import('@components/VoxDog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

interface ChildrenFC {
  children?: ReactNode | ReactNode[];
  router: Router;
}

const AppLayout: FC<ChildrenFC> = ({ children, router }) => (
  <Box as="main">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Chad Portfolio</title>
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14}>
      <Box>
        <LazyVoxelDog />
      </Box>
      {children}
    </Container>
  </Box>
);

export default AppLayout;
