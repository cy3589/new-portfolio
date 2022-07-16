import { Box, Container, Link } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import NextLink from 'next/link';
import { FC } from 'react';

const Projects: FC = () => {
  return (
    <Layout>
      <Container>
        <NextLink href="/projects/sleact">
          <Link>
            <Box>Sleact</Box>
          </Link>
        </NextLink>
        <Box>Projtects</Box>
        <Box>Projtects</Box>
        <Box>Projtects</Box>
        <Box>Projtects</Box>
      </Container>
    </Layout>
  );
};
export default Projects;
