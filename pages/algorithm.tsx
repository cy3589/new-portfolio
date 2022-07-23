import { Box, Container, Flex } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { FC } from 'react';

const Algorithm: FC = () => (
  <Layout>
    <Container>
      <Flex
        h="3xs"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box>알고리즘 문제 풀이를 위한 공간입니다</Box>
        <Box mt="4">개발중..</Box>
      </Flex>
    </Container>
  </Layout>
);
export default Algorithm;
