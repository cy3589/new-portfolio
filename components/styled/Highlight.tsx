import { CSSObject, Highlight as ChakraHighlight } from '@chakra-ui/react';
import { FC } from 'react';

interface HighlightProps {
  value: string;
  styles?: CSSObject | undefined;
}
const defaultStyled = { px: '1', pb: '0.5', rounded: 'full', bg: 'gray.300' };
const Highlight: FC<HighlightProps> = ({ value, styles = {} }) => (
  <ChakraHighlight query={value} styles={{ ...defaultStyled, ...styles }}>
    {value}
  </ChakraHighlight>
);

export default Highlight;
