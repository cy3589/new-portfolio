import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface MainSimpleInfoProps {
  mainSimpleInfo?: string;
}
const MainSimpleInfo: FC<MainSimpleInfoProps> = ({ mainSimpleInfo }) => {
  if (!mainSimpleInfo) return null;
  return (
    <Box
      borderRadius="lg"
      bg="#a0a0a0"
      p={3}
      mb={6}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {mainSimpleInfo}
    </Box>
  );
};
export default MainSimpleInfo;
