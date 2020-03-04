import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledPicture = styled.picture`
  display: block;
  width: 100%;
  margin: ${spacing.m} auto;

  img {
    display: block;
  }
`;
