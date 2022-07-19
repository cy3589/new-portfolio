import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { FC } from 'react';
import NODEBIRD_THUMBNAIL from '@public/nodebird/nodebird-thumbnail.png';
import SLEACT_THUMBNAIL from '@public/sleact/sleact-thumbnail.png';
import O_HOUSE_THUMBNAIL from '@public/o-house/o-house-thumbnail__.jpg';
import DOKTEUK_THUMBNAIL from '@public/dokteuk/dokteuk-thumbnail.png';
import SHOW_ME_THE_FEEDBACK_THUMBNAIL from '@public/show-me-the-feedback/show-me-the-feedback-thumbnail.png';
import { ProjectsPreview } from '@typings/project';
import GridProjectItem from '@components/projects/GridProjectItem';

const Projects: FC = () => {
  const {} = GetProjects('1');
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={6}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {MyProjectsData.map(({ thumbNailSrc, title, id }) => (
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

export default Projects;
