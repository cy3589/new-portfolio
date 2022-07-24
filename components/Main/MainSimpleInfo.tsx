import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

interface MainSimpleInfoProps {
  mainSimpleInfo?: string;
}
const MainSimpleInfo: FC<MainSimpleInfoProps> = ({ mainSimpleInfo }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  if (!mainSimpleInfo) return null;
  return (
    <Box
      borderRadius="lg"
      bg={bgColor}
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
