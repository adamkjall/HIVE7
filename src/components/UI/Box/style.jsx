import styled from 'styled-components';

import fontWeights from 'tokens/fontWeights.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledBox = styled.div`
  margin-top: ${({ marginTop }) => (marginTop ? '3rem' : '0')};
  margin-bottom: ${spacing.small};
  padding: ${spacing.small};
  border-radius: 5px;
  background-color: ${colors.white};
  transition: 0.1s;

  h3 {
    font-weight: ${fontWeights.regular};
  }

  &:hover {
    box-shadow: ${({ shadow }) => (shadow ? `0 5px 15px rgba(175,175,175,0.5)` : 'none')};
    transition: 0.2s;
  }
`;
