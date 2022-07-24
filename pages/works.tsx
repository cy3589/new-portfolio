import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Spinner,
  UnorderedList,
  List,
} from '@chakra-ui/react';
import P from '@components/styled/P';
import { GetWorksFetcher } from '@fetchers/works';
import Layout from '@layouts/Layout';
import { GetWorks } from '@queries/works';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { FC, useMemo } from 'react';
import { dehydrate, QueryClient } from 'react-query';

const Works: FC = () => {
  const { data, isLoading } = GetWorks();
  const { works } = useMemo(() => ({ works: data?.works }), [data]);
  if (isLoading)
    return (
      <Layout>
        <Container>
          <Flex justifyContent="center" alignItems="center" h="3xs">
            <Spinner size="xl" />
          </Flex>
        </Container>
      </Layout>
    );
  if (!works || works.length === 0)
    return (
      <Layout>
        <Container>
          <Flex h="3xs" justifyContent="center" alignItems="center">
            <Heading size="lg">이력이 없습니다</Heading>
          </Flex>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        {works.map(({ company, period, work }) => (
          <Box key={company} mb="8">
            <Heading size="md">{company}</Heading>
            <P mt="2">{period}</P>
            {work && work.length > 0 && (
              <UnorderedList>
                {work.map(({ title, description }, i) => (
                  <ListItem ml="4" key={i} mt="4">
                    <Heading size="xs" mb="1">
                      {title}
                    </Heading>
                    {description && description.length > 0 && (
                      <List>
                        {description.map((d, index) => (
                          <ListItem key={index}>{`- ${d}`}</ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </UnorderedList>
            )}
          </Box>
        ))}
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
    await queryClient.prefetchQuery(['user', 'works'], GetWorksFetcher);
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

export default Works;
