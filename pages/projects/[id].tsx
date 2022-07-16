import { Box, Container, Text } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const delay = (ms = 1000) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

interface Project {
  title: string;
  isTeam: boolean;
  useSkills?: { front?: string[]; back?: string[] };
  isDeploy: boolean;
  gitLink?: string;
  summary: string;
  whatILean: string[];
}
const Project = (props: any) => {
  console.log({ props });
  return (
    <Layout>
      <Container>
        <Box>
          <Text>Hello World</Text>
        </Box>
      </Container>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const id = ctx.params?.id;
  if (!id) return { notFound: true };
  await delay(1000); // serverSideDataFetch
  /**
   * 데이터가 없다면
   * return { notFound: true };
   * */
  console.log({ id });
  return { props: { id } };
};

export default Project;
