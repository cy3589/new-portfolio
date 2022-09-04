import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import Layout from '@layouts/Layout';
import { GetLean } from '@queries/learn';
import { GetStaticProps } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import { GetLearnFetcher } from '@fetchers/learn';

const Learn: FC = () => {
  const { data, isLoading } = GetLean();
  const { training, education } = useMemo(() => {
    const nullish = { training: null, education: null };
    if (!data) return nullish;
    if (!data.learn) return nullish;
    if (!data.learn.education && !data.learn.training) return nullish;
    return data.learn;
  }, [data]);

  if (isLoading)
    return (
      <Layout>
        <Container>
          <Flex justifyContent="center" h="3xs" alignItems="center">
            <Spinner size="xl" />
          </Flex>
        </Container>
      </Layout>
    );

  if (!data || (!training && !education))
    return (
      <Layout>
        <Container>
          <Flex justifyContent="center" h="3xs" alignItems="center">
            <Heading size="md">이력이 없습니다</Heading>
          </Flex>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        {training && training.length > 0 && (
          <Box>
            <Heading size="lg">Training</Heading>
            <UnorderedList ml="8" mt="2">
              {training.map(({ company, period }) => (
                <ListItem key={company}>
                  <Flex flexWrap="wrap">
                    <Text mr="1.5">{company}</Text>
                    <Text>{`(${period})`}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}
        {education && education.length > 0 && (
          <Box mt="8">
            <Heading size="lg">Education</Heading>
            <UnorderedList ml="8" mt="2">
              {education.map(({ university, major, period }) => (
                <ListItem key={university}>
                  <Flex flexWrap="wrap">
                    <Text mr="1.5">{university}</Text>
                    <Text mr="1">{major}</Text>
                    <Text>{`(${period})`}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  try {
    await queryClient.prefetchQuery(['user', 'learn'], GetLearnFetcher);
    return {
      props: {
        dehydratedState: JSON.parse(
          JSON.stringify(dehydrate(queryClient)),
        ) as DehydratedState,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.error(error);
    return { notFound: true };
  }
};

export default Learn;
