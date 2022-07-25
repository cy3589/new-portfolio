import {
  Box,
  Heading,
  Flex,
  Code,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Project } from '@typings/project';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-cards';

interface ProjectRenderProps {
  data: Project;
}

const ProjectRender: FC<ProjectRenderProps> = ({
  data,
}: ProjectRenderProps) => {
  const {
    isTeam,
    summary,
    title,
    whatILean,
    deploy,
    description,
    gitLink,
    images,
    myRole,
    useSkills,
  }: Project = useMemo(() => data, [data]);
  return (
    <Box>
      <Heading>{title}</Heading>
      <Heading mt="2" fontSize="xl" as="p">{`${
        isTeam ? '팀' : '개인'
      }프로젝트`}</Heading>
      {useSkills && (
        <Box>
          <Box alignItems="center" my={4}>
            <Text>사용 언어 및 라이브러리</Text>
          </Box>
          <Box>
            <Flex flexWrap="wrap" rowGap="2">
              <Text mr="2">Front: </Text>
              {useSkills.front.map((frontSkill) => (
                <Code key={frontSkill} mr="2">
                  {frontSkill}
                </Code>
              ))}
            </Flex>
          </Box>
          {useSkills.back && (
            <Box mt="2">
              <Flex flexWrap="wrap" rowGap="2">
                <Text mr="2">Back: </Text>
                {useSkills.back.map((backSkill) => (
                  <Code key={backSkill} mr="2">
                    {backSkill}
                  </Code>
                ))}
              </Flex>
            </Box>
          )}
        </Box>
      )}
      <Flex mt="2" flexDirection="column">
        <Flex>
          <Text mr="2">배포여부: </Text>
          <Text>{deploy ? 'O' : 'X'}</Text>
        </Flex>
        {deploy && (
          <Flex mt="2">
            <Text mr="2">배포링크:</Text>
            <Link target="_blank" href={deploy.link}>
              {deploy.link}
            </Link>
          </Flex>
        )}
      </Flex>
      <Flex mt="2">
        <Text mr="2">Git: </Text>
        <Link target="_blank" href={gitLink}>
          {gitLink}
        </Link>
      </Flex>
      <Flex mt="4" flexDirection="column">
        <Heading fontSize="xl">summary</Heading>
        <Text mt="2">{summary}</Text>
      </Flex>
      {description && (
        <Flex mt="4" flexDirection="column">
          <Heading fontSize="lg">description</Heading>
          <Text mt="2">{description}</Text>
        </Flex>
      )}
      {myRole && myRole.length > 0 && (
        <Box mt="4">
          <Heading fontSize="xl">My Role</Heading>
          <UnorderedList>
            {myRole.map((role, index) => (
              <ListItem mt="2" key={index}>
                {role}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
      <Heading mt="4" fontSize="xl">
        Learned
      </Heading>
      <UnorderedList mt="2">
        {whatILean.map((learn, index) => (
          <ListItem mt="2" key={index}>
            <Text>{learn}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      {images && images.length > 0 && (
        <Box>
          <Heading mt="4" mb="4" fontSize="xl">
            Images
          </Heading>
          <Swiper
            modules={[EffectCards]}
            grabCursor
            effect="cards"
            cardsEffect={{ slideShadows: true }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Box
                  w="100%"
                  borderRadius="24px"
                  textAlign="center"
                  border="2px"
                  pb="100%"
                  position="relative"
                  overflow="hidden"
                  bg="#000"
                >
                  <Image
                    position="absolute"
                    src={src}
                    alt={src}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};
export default ProjectRender;
