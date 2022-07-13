import type { NextPage } from 'next';
import { Container, Box, Heading } from '@chakra-ui/react';
import Section from '@layouts/Section';

const Home: NextPage = () => (
  <Container>
    <Box
      borderRadius="lg"
      bg="#a0a0a0"
      p={3}
      mb={6}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      Hi
    </Box>
    <Box display="-ms-flexbox">
      <Box flexGrow={1}>
        <Heading as="h2" variant="section-title">
          Chad
        </Heading>
        <p>Hello</p>
      </Box>
    </Box>
    <Section delay={-0.1} duration={1.2}>
      <Box>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>헬로월드</p>
      </Box>
    </Section>
  </Container>
);

export default Home;
