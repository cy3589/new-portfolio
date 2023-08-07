import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Heading,
  AccordionIcon,
  AccordionPanel,
  Card,
  CardHeader,
  Flex,
  Avatar,
  CardBody,
  Box,
  Text,
} from '@chakra-ui/react';
import { GetSolvedACResult } from '@typings/info';
import { FC } from 'react';

const SOLVED_AC_DEFAULT_PROFILE =
  'https://static.solved.ac/misc/360x360/default_profile.png';

const SolvedACProfileAccordion: FC<{ solvedACInfo?: GetSolvedACResult }> = ({
  solvedACInfo,
}) => {
  if (!solvedACInfo) return null;
  return (
    <Box mt="6" width="fit-content">
      <Box alignItems="center" my={4}>
        <Accordion mt="4" allowToggle fontWeight="semibold">
          <AccordionItem border="hidden">
            <AccordionButton pl={0}>
              <Heading fontSize="large" as="h5" variant="section-title">
                Solved.AC 정보
              </Heading>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p={0}>
              <Card maxW="md">
                <CardHeader>
                  <Flex letterSpacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name={`profile-${solvedACInfo.userId}`}
                        src={
                          solvedACInfo.profileImageUrl ||
                          SOLVED_AC_DEFAULT_PROFILE
                        }
                      />

                      <Box>
                        <Heading size="sm">{solvedACInfo.userId}</Heading>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Box alignItems="center" display="flex" columnGap="4px">
                    <Text>{`티어: ${solvedACInfo.tier}`}</Text>
                    <Avatar
                      name={solvedACInfo.tier}
                      src={`https://static.solved.ac/tier_small/${solvedACInfo.tierIndex}.svg`}
                      rounded="none"
                      borderRadius={0}
                      objectFit="contain"
                      width="16px"
                      height="fit-content"
                    />
                  </Box>
                  <Text>{`AC 랭킹: ${solvedACInfo.rank.toLocaleString()}`}</Text>
                  <Text>{`푼 문제 수: ${solvedACInfo.solvedCount.toLocaleString()}개`}</Text>
                </CardBody>
              </Card>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SolvedACProfileAccordion;
