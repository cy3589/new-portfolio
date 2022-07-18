import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { FC } from 'react';
import NODEBIRD_THUMBNAIL from '@public/nodebird/nodebird-thumbnail.png';
import SLEACT_THUMBNAIL from '@public/sleact/sleact-thumbnail.png';
import O_HOUSE_THUMBNAIL from '@public/o-house/o-house-thumbnail__.jpg';
import DOKTEUK_THUMBNAIL from '@public/dokteuk/dokteuk-thumbnail.png';
import SHOW_ME_THE_FEEDBACK_THUMBNAIL from '@public/show-me-the-feedback/show-me-the-feedback-thumbnail.png';
import { ProjectsPre } from '@typings/project';
import GridProjectItem from '@components/projects/GridProjectItem';

const MyProjectsData: ProjectsPre[] = [
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird',
    id: '16580510039130',
  },
  {
    thumbNailSrc: SLEACT_THUMBNAIL,
    title: 'Sleact',
    id: '16580510039131',
  },
  {
    thumbNailSrc: O_HOUSE_THUMBNAIL,
    title: 'O-House-Clone',
    id: '16580510039132',
  },
  {
    thumbNailSrc: DOKTEUK_THUMBNAIL,
    title: 'Dokteuk',
    id: '16580510039133',
  },
  {
    thumbNailSrc: SHOW_ME_THE_FEEDBACK_THUMBNAIL,
    title: 'ShowMeTheFeedback',
    id: '16580510039134',
  },
];
const Projects: FC = () => (
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

export default Projects;
