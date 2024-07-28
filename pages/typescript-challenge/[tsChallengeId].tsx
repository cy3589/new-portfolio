import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { GetTSChallengeFetcher } from '@fetchers/ts-challenge';
import Layout from '@layouts/Layout';
import { useGetTSChallenge } from '@queries/ts-challenge';
import { useRouter } from 'next/router';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next/types';
import { FC } from 'react';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const TSChallenge: FC = () => {
  const router = useRouter();
  const tsChallengeId = router.query?.tsChallengeId as string;

  const { data } = useGetTSChallenge(tsChallengeId);

  return (
    <Layout>
      <Container>
        <Flex
          h="full"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p="4"
        >
          <Box textAlign="left" width="full">
            {!Number.isNaN(Number(data?.tsChallenge.id)) &&
              data?.tsChallenge.id}
          </Box>
          <Box textAlign="left" width="full">
            {data?.tsChallenge.title}
          </Box>
          <Box h="full" maxW="full" overflowX="scroll" w="full">
            <SyntaxHighlighter language="typescript" PreTag="div">
              {data?.tsChallenge.code ?? ''}
            </SyntaxHighlighter>
          </Box>
          {/* <Box whiteSpace="pre-line">{data?.tsChallenge.code}</Box> */}
          {!!data?.tsChallenge.link && (
            <Link
              textAlign="left"
              w="full"
              isExternal
              href={data?.tsChallenge.link}
            >
              Link
            </Link>
          )}
          <Box textAlign="left" mt="4">
            {data?.tsChallenge.description}
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line import/extensions
  const myTSChallenges = await import('myDatas').then(
    (module) => module.myTSChallenges,
  );
  const ids = myTSChallenges.map(({ id }) => ({
    params: { tsChallengeId: id },
  }));
  return { paths: ids, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const tsChallengeId = ctx.params?.tsChallengeId as string;
  if (!tsChallengeId) return { notFound: true };
  try {
    await queryClient.prefetchQuery(
      ['user', 'ts-challenge', tsChallengeId],
      () => GetTSChallengeFetcher(tsChallengeId),
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
    // console.error(error);
    return { notFound: true };
  }
};

export default TSChallenge;
