import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledBack = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border: none;
  background: none;

  .back {
    padding: ${spacing.small} ${spacing.small} 0;
    border: none;
    background: none;
  }
`;
