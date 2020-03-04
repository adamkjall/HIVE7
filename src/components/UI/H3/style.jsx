import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledH3 = styled.h3`
  font-size: ${fontSizes.h3};
  line-height: ${lineHeights.xs};
  font-weight: ${fontWeights.medium};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
