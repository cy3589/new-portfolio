import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Layout from '@layouts/Layout';
import { FC, useMemo } from 'react';

const data = {
  learn: {
    traning: [{ company: '엘리스 코딩 부트캠프', period: '2021.10 ~ 2022.02' }],
    education: [
      {
        university: '단국대학교',
        major: '전자전기공학부 학사',
        period: '2016.03 ~ 2020.02',
      },
    ],
  },
};
const Learn: FC = () => {
  const { traning, education } = useMemo(() => data?.learn, [data]);
  if (!data || (!traning && !education))
    return (
      <Layout>
        <Container>
          <Flex justifyContent="center" h="3xs" alignItems="center">
            <Heading size="md">이력이 없습니다</Heading>
          </Flex>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        {traning && traning.length > 0 && (
          <Box>
            <Heading size="lg">Traning</Heading>
            <UnorderedList ml="8" mt="2">
              {traning.map(({ company, period }) => (
                <ListItem key={company}>
                  <Flex>
                    <Text mr="1">{company}</Text>
                    <Text>{`(${period})`}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}
        {education && education.length > 0 && (
          <Box mt="8">
            <Heading size="lg">Education</Heading>
            <UnorderedList ml="8" mt="2">
              {education.map(({ university, major, period }) => (
                <ListItem key={university}>
                  <Flex>
                    <Text mr="2">{university}</Text>
                    <Text mr="2">/</Text>
                    <Text mr="1">{major}</Text>
                    <Text>{`(${period})`}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}
      </Container>
    </Layout>
  );
};
export default Learn;
