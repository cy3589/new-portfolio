import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';

interface IntroduceProps {
  simpleInfo?: string;
  introduces?: string[];
}
const Introduce: FC<IntroduceProps> = ({ simpleInfo, introduces = [] }) => {
  if (!Array.isArray(introduces)) return null; // 잘못된 Input 예외처리
  if (!simpleInfo && introduces.length === 0) return null; // 간단 소개글도 없고 introduces또한 없는 경우 예외처리
  return (
    <Box mt="6">
      <Heading as="h3" variant="section-title">
        Introduce
      </Heading>
      <Box alignItems="center" my={4}>
        <Text>{simpleInfo}</Text>
      </Box>
      <UnorderedList ml={4} my={4}>
        {introduces?.map((introduce, index) => (
          <ListItem key={index} mt="4">
            {introduce}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Introduce;
