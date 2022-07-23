import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import Layout from '@layouts/Layout';
import { GetLean } from '@queries/learn';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { GetLearnFetcher } from '@fetchers/learn';

const Learn: FC = () => {
  const { data } = GetLean();
  const { traning, education } = useMemo(() => {
    const nullish = { traning: null, education: null };
    if (!data) return nullish;
    if (!data.learn) return nullish;
    if (!data.learn.education && !data.learn.traning) return nullish;
    return data.learn;
  }, [data]);
  if (!data || (!traning && !education))
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
        {traning && traning.length > 0 && (
          <Box>
            <Heading size="lg">Traning</Heading>
            <UnorderedList ml="8" mt="2">
              {traning.map(({ company, period }) => (
                <ListItem key={company}>
                  <Flex>
                    <Text mr="1">{company}</Text>
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
                  <Flex>
                    <Text mr="2">{university}</Text>
                    <Text mr="2">/</Text>
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  if (ctx.req.headers.referer) return { props: {} }; // 첫 방문이 아니라면 prefetch 하지 않음
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  try {
    await queryClient.prefetchQuery(['user', 'learn'], GetLearnFetcher);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { notFound: true };
  }
};

export default Learn;
