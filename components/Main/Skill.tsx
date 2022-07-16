import {
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { Skills } from '@pages/index';
import { FC, Fragment } from 'react';
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

const Code = styled.code`
  border-radius: 10px;
  background-color: #cbd5e0;
  color: #000;
  padding-left: 6px;
  padding-right: 6px;
  font-weight: 600;
  font-family: 'M PLUS Rounded 1c';
`;
interface MainSkillImage {
  src: string | StaticImageData;
  alt?: string;
  title?: string;
}
interface SkillProps {
  skill?: {
    skills: Skills[][];
    mainSkillImages?: MainSkillImage[];
  };
}
const Skill: FC<SkillProps> = ({ skill }) => {
  if (!skill) return null;
  return (
    <Box mt="6">
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <UnorderedList ml={4} my={4} mt="6">
        {skill.skills.map((skillData, index) => (
          <ListItem mt="2" key={index}>
            {skillData.map(({ isHighlight, data }, i) => (
              <Fragment key={i}>
                {isHighlight ? <Code>{data}</Code> : data}
              </Fragment>
            ))}
          </ListItem>
        ))}
      </UnorderedList>
      <Heading as="h3" variant="secondary-title" boxShadow="2xl">
        <Text>Main Skills</Text>
      </Heading>
      <Box>
        <SimpleGrid columns={[3, 3, 4]} gap={6}>
          {skill.mainSkillImages?.map(({ src, alt, title }) => (
            <GridSkillImageItem
              key={title ?? alt ?? src.toString()}
              src={src}
              alt={alt ?? title ?? src.toString()}
              title={title}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

const GridSkillImageItem = ({ src, title }: MainSkillImage) => (
  <Box w="100%" textAlign="center">
    <LinkBox _hover={{ transform: 'scale(1.1)' }} transition="0.3s ease">
      <SkillImageWrapper>
        <Image
          src={src}
          alt={title ?? 'skill-image'}
          style={{ borderRadius: '12px' }}
          loading="lazy"
          objectFit="cover"
          layout="fill"
          unoptimized
        />
      </SkillImageWrapper>
      <Badge fontSize={14} mt={4}>
        {title}
      </Badge>
    </LinkBox>
  </Box>
);
const SkillImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 100%;
  position: relative;
`;
export default Skill;
