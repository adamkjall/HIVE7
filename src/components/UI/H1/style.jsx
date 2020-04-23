import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledH1 = styled.h1`
  font-size: ${fontSizes.h1};
  line-height: ${lineHeights.xs};
  font-weight: ${fontWeights.fontLight};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
