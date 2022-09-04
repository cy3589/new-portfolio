import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({ body: { bg: mode('#F0E7DB', '#202023')(props) } }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      'secondary-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textAlign: 'center',
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#ff63c3', '#3d7aed')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = { heading: "'M PLUS Rounded 1c'" };
const colors = { grassTeal: '#88ccca' };
const config: { initialColorMode: 'dark'; useSystemColorMode: boolean } = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});
export default theme;
