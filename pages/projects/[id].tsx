import { FC, useMemo } from 'react';
import {
  Box,
  Container,
  Spinner,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { useRouter } from 'next/router';

import Layout from '@layouts/Layout';
import { GetProjectFetcher } from '@fetchers/project';
import { GetProject } from '@queries/project';
import ProjectRender from '@components/projects/ProjectRender';

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
      if (isError || !data)
        return (
          <Alert status="error" display="flex" flexDirection="column">
            <AlertIcon boxSize={10} />
            <AlertTitle>잘못된 요청입니다</AlertTitle>
            <AlertDescription>
              페이지의 주소가 잘못 입력되었거나,
            </AlertDescription>
            <AlertDescription>
              변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
            </AlertDescription>
            <AlertDescription>
              입력하신 페이지 주소를 다시 한번 확인해 주세요.
            </AlertDescription>
          </Alert>
        );
    }
    return <ProjectRender data={data.project} />;
  }, [data, isError, isLoading]);
  return (
    <Layout>
      <Container>{renderData}</Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  if (ctx.req.headers.referer) return { props: {} };
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
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.error(error);
    return { notFound: true };
  }
};

export default Project;
