import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import theme from '@utils/theme';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ReactNode } from 'react';

interface ChakraProps {
  cookies?: string;
  children?: ReactNode | ReactNode[];
}
const Chakra: NextPage<ChakraProps> = ({ children, cookies }) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => ({
  props: { cookies: req.headers.cookie ?? '' },
});
export default Chakra;
