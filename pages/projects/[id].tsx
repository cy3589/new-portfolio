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
  Flex,
  ListItem,
  Heading,
  Code,
  Link,
  UnorderedList,
  Image,
} from '@chakra-ui/react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { useRouter } from 'next/router';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from '@layouts/Layout';
import { GetProjectFetcher } from '@fetchers/project';
import { GetProject } from '@queries/project';

// import 'swiper/swiper.min.css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// import 'swiper/modules/effect-cards/effect-cards.min.css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-cards';

const Project: FC = () => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, isError, isLoading } = GetProject(id);

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
    const {
      title,
      isTeam,
      useSkills,
      deploy,
      gitLink,
      summary,
      whatILean,
      description,
      images,
    } = data.project;
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
