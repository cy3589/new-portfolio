import { UnorderedList, ListItem, Heading, Text, Box } from '@chakra-ui/react';
import { Skills } from '@pages/index';
import { FC, Fragment } from 'react';
import styled from '@emotion/styled';

const Code = styled.code`
  border-radius: 10px;
  background-color: #cbd5e0;
  color: #000;
  padding-left: 6px;
  padding-right: 6px;
  font-weight: 600;
  font-family: 'M PLUS Rounded 1c';
`;

interface SkillProps {
  skill?: {
    skills: Skills[][];
    mainSkillImages?: string[];
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
      <Box>스킬 사진 나열~~</Box>
    </Box>
  );
};
export default Skill;
