import { Container, Flex, Link } from '@chakra-ui/react';
import { GetTSChallengesFetcher } from '@fetchers/ts-challenge';
import Layout from '@layouts/Layout';
import { useGetTSChallenges } from '@queries/ts-challenge';
import NextLink from 'next/link';
import { GetStaticProps } from 'next/types';
import { FC } from 'react';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';

const Algorithm: FC = () => {
  const { data } = useGetTSChallenges();
  return (
    <Layout>
      <Container>
        <Flex
          h="full"
          overflow="scroll"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap="2"
        >
          {data?.tsChallenges.map(({ id, title }) => {
            const url = `/typescript-challenge/${id}`;
            return (
              <NextLink href={url} key={id} passHref>
                <Link
                  href={url}
                  rounded="2xl"
                  width="full"
                  p="4"
                  border="1px"
                  textAlign="left"
                  colorScheme="red"
                  color=""
                >
                  {title}
                </Link>
              </NextLink>
            );
          })}
        </Flex>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  try {
    await queryClient.prefetchQuery(
      ['user', 'ts-challenges'],
      GetTSChallengesFetcher,
    );
    return {
      props: {
        dehydratedState: JSON.parse(
          JSON.stringify(dehydrate(queryClient)),
        ) as DehydratedState,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { props: {} };
  }
};

export default Algorithm;
