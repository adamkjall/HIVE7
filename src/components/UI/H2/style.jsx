import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledH2 = styled.h2`
  font-family: 'Londrina Solid', cursive;
  font-size: ${fontSizes.h2};
  letter-spacing: 0.5px;
  line-height: ${lineHeights.l};
  font-weight: ${fontWeights.medium};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
