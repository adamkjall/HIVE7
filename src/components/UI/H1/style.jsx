import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledH1 = styled.h1`
  font-family: 'Londrina Solid', cursive;
  font-size: ${fontSizes.h1};
  line-height: ${lineHeights.l};
  font-weight: ${fontWeights.fontRegular};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
