import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { FC } from 'react';
import GridProjectItem from '@components/projects/GridProjectItem';
import { GetProjects } from '@queries/project';
import { GetStaticProps } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import { GetProjectsFetcher } from '@fetchers/project';

const Projects: FC = () => {
  const { data: myProjectsData } = GetProjects();
  const companyProjects = myProjectsData?.projects.filter(
    ({ isCompanyProject }) => isCompanyProject,
  );
  const toyProjects = myProjectsData?.projects.filter(
    ({ isCompanyProject }) => !isCompanyProject,
  );
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={6}>
          Company Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {companyProjects?.map(({ thumbNailSrc, title, id }) => (
            <GridProjectItem
              key={id}
              thumbNailSrc={thumbNailSrc}
              title={title}
              id={id}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Container>
        <Heading as="h3" fontSize={20} mt={12} mb={6}>
          Toy Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {toyProjects?.map(({ thumbNailSrc, title, id }) => (
            <GridProjectItem
              key={id}
              thumbNailSrc={thumbNailSrc}
              title={title}
              id={id}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  try {
    await queryClient.prefetchQuery(['user', 'projects'], GetProjectsFetcher);
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

export default Projects;
