import { FC, useMemo } from 'react';
import { Box, Container, Spinner } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { QueryClient, dehydrate, DehydratedState } from 'react-query';
import { useRouter } from 'next/router';

import Layout from '@layouts/Layout';
import { GetProjectFetcher } from '@fetchers/project';
import { GetProject } from '@queries/project';
import ProjectRender from '@components/projects/ProjectRender';
import NotFound from '@pages/404';

const Project: FC = () => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, isError, isLoading } = GetProject(id);

  const renderData = useMemo(() => {
    if (isLoading || isError || !data) {
      if (isLoading)
        return (
          <Box>
            <Spinner
              size="xl"
              position="absolute"
              left="50%"
              top="50%"
              ml="calc(0px - var(--spinner-size) / 2)"
            />
          </Box>
        );
      if (isError || !data) return <NotFound />;
    }
    return <ProjectRender data={data.project} />;
  }, [data, isError, isLoading]);
  return (
    <Layout>
      <Container>{renderData}</Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line import/extensions
  const myProjects = await import('../../myDatas').then(
    (module) => module.default,
  );
  const ids = Object.keys(myProjects).map((id) => ({ params: { id } }));
  return { paths: ids, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const id = ctx.params?.id as string;
  if (!id) return { notFound: true };
  try {
    await queryClient.prefetchQuery(
      ['user', 'project', id],
      GetProjectFetcher(id),
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

export default Project;
