import { forwardRef, ReactNode } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

interface DogContainerProps {
  children?: ReactNode | ReactNode[];
}

const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

const DogContainer = forwardRef<null | HTMLDivElement, DogContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-100px']}
      mb={['-40px', '-80px', '-140px']}
      w={[180, 320, 480]}
      h={[180, 320, 480]}
      position="relative"
    >
      {children}
    </Box>
  ),
);
DogContainer.displayName = 'DogContainer';

const Loader = () => (
  <DogContainer>
    <DogSpinner />
  </DogContainer>
);
export { DogSpinner, DogContainer };
export default Loader;
