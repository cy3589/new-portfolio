import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { Box, Container, FormErrorIcon, Spinner } from '@chakra-ui/react';

import Layout from '@layouts/Layout';
import { useMemo } from 'react';
import MainSimpleInfo from '@components/Main/MainSimpleInfo';
import PersonalInfo from '@components/Main/PersonalInfo';
import Introduce from '@components/Main/Introduce';
import Skill from '@components/Main/Skill';
import { dehydrate, QueryClient } from 'react-query';
import { GetUserInfo } from '@queries/info';
import { GetUserInfoFetcher } from '@fetchers/userInfo';

const Home: NextPage = () => {
  const { data, isLoading } = GetUserInfo('1');
  const info = useMemo(() => data?.info ?? null, [data]);
  if (isLoading)
    return (
      <Layout>
        <Container>
          <Spinner />
        </Container>
      </Layout>
    );
  if (!info)
    return (
      <Layout>
        <Container>
          <Box>
            <FormErrorIcon />
          </Box>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        <MainSimpleInfo mainSimpleInfo={info.mainSimpleInfo} />
        <PersonalInfo name={info.name} phone={info.phone} email={info.email} />
        <Introduce simpleInfo={info.simpleInfo} introduces={info.introduces} />
        <Skill skill={info.skill} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  if (!ctx.req.headers.referer) return { props: {} };
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const id = (ctx.params?.id ?? '1') as string;
  if (!id) return { notFound: true };
  try {
    await queryClient.prefetchQuery(
      ['user', 'info', id],
      GetUserInfoFetcher(id),
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    if (typeof window !== 'undefined') window.console.error(error);
    return { notFound: true };
  }
};

export default Home;
