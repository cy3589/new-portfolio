import { Box, Heading } from '@chakra-ui/react';
import SolvedACProfileAccordion from '@components/SolvedACProfileAccordion';
import { GetSolvedACResult } from '@typings/info';
import { FC } from 'react';

interface PersonalInfoProps {
  name: string;
  phone: string;
  email: string;
  solvedACInfo?: GetSolvedACResult;
}

const PersonalInfo: FC<PersonalInfoProps> = ({
  name,
  phone,
  email,
  solvedACInfo,
}) => {
  if (!name || !phone || !email) return null;
  return (
    <Box display="-ms-flexbox">
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          {name}
        </Heading>
        <Box>{`Phone: ${phone}`}</Box>
        <Box>{`Email: ${email}`}</Box>
        <SolvedACProfileAccordion solvedACInfo={solvedACInfo} />
      </Box>
    </Box>
  );
};
export default PersonalInfo;
