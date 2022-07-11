import type { NextPage } from 'next';
import { Container, Box, Heading } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Home: NextPage = () => (
  <Container>
    <Box
      borderRadius="lg"
      bg="aqua"
      p={3}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      Hi
    </Box>
    <Box display="-ms-flexbox">
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Chad
        </Heading>
        <HamburgerIcon />
        <p>Hello</p>
      </Box>
    </Box>
  </Container>
);

export default Home;
