import { FC, useMemo } from 'react';
import {
  Box,
  Container,
  Spinner,
  Text,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { AxiosError } from 'axios';
import { QueryClient, useQuery, dehydrate } from 'react-query';
import Layout from '@layouts/Layout';
import { useRouter } from 'next/router';
import { GetProjectAxiosResult } from '@typings/project';
import { GetProjectFetcher } from '@fetchers/project';

const Project: FC = () => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, isError, isLoading } = useQuery<
    GetProjectAxiosResult,
    AxiosError,
    GetProjectAxiosResult,
    string[]
  >(['project', id], GetProjectFetcher(id), { retry: 2 });

  const renderData = useMemo(() => {
    if (isLoading || isError || !data) {
      if (isLoading)
        return (
          <Spinner
            size="xl"
            position="absolute"
            left="50%"
            top="50%"
            ml="calc(0px - var(--spinner-size) / 2)"
            mt="calc(0px - var(--spinner-size))"
          />
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
    return (
      <Box>
        <Text>{JSON.stringify(data?.project)}</Text>
      </Box>
    );
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
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const id = ctx.params?.id as string;
  if (!id) return { notFound: true };
  try {
    await queryClient.prefetchQuery(['project', id], GetProjectFetcher(id));
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

export default Project;
