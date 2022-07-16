import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface PersonalInfoProps {
  name: string;
  phone: string;
  email: string;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ name, phone, email }) => {
  if (!name || !phone || !email) return null;
  return (
    <Box display="-ms-flexbox">
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          {name}
        </Heading>
        <Box>{`Phone: ${phone}`}</Box>
        <Box>{`Email: ${email}`}</Box>
      </Box>
    </Box>
  );
};
export default PersonalInfo;
