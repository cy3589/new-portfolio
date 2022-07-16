import {
  Box,
  Code,
  Container,
  Heading,
  Link,
  LinkBox,
  SimpleGrid,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Layout from '@layouts/Layout';
import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

import NODEBIRD_THUMBNAIL from '@public/nodebird/nodebird-thumbnail.png';

interface ProjectsPre {
  thumbNailSrc: string | StaticImageData;
  title: string;
  id: string;
}
const MyProjectsData: ProjectsPre[] = [
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird',
    id: Date.now().toString() + 0,
  },
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird0',
    id: Date.now().toString() + 1,
  },
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird1',
    id: Date.now().toString() + 2,
  },
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird2',
    id: Date.now().toString() + 3,
  },
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird3',
    id: Date.now().toString() + 4,
  },
  {
    thumbNailSrc: NODEBIRD_THUMBNAIL,
    title: 'NodeBird4',
    id: Date.now().toString() + 5,
  },
];
const Projects: FC = () => {
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

interface GridProjectItemProps {
  thumbNailSrc: string | StaticImageData;
  thumbNailAlt?: string;
  title: string;
  id: string;
}
const GridProjectItem: FC<GridProjectItemProps> = ({
  thumbNailSrc,
  thumbNailAlt,
  title,
  id,
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`}>
      <Link>
        <LinkBox _hover={{ transform: 'scale(1.1)' }} transition="0.3s ease">
          <SkillImageWrapper>
            <Image
              src={thumbNailSrc}
              alt={thumbNailAlt ?? title ?? thumbNailSrc}
              style={{ borderRadius: '12px' }}
              loading="lazy"
              objectFit="cover"
              layout="fill"
              unoptimized
            />
          </SkillImageWrapper>
          <Code fontSize={14} mt={4}>
            {title}
          </Code>
        </LinkBox>
      </Link>
    </NextLink>
  </Box>
);
const SkillImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 100%;
  position: relative;
`;

export default Projects;
