import { FC, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Router } from 'next/router';
import dynamic from 'next/dynamic';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import Navbar from '@layouts/Navbar';
import Footer from '@layouts/Footer';
import VoxelDogLoader from '@components/VoxDogLoader';

const DEFAULT_SEO: DefaultSeoProps = {
  title: "Chad's Portfolio",
  description: 'FE Developer',
  canonical: 'https://cy3589.com',
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cy3589.com',
    title: "Chad's Portfolio",
    description: 'FE Developer',
    site_name: "Chad's Portfolio",
    images: [
      {
        url: '/kakao-op-image.png',
        width: 800,
        height: 400,
        alt: 'preview-card',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

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
    <DefaultSeo {...DEFAULT_SEO} />
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14} minH="container.md">
      <Box>
        <LazyVoxelDog />
      </Box>
      {children}
    </Container>
    <Footer />
  </Box>
);

export default AppLayout;
