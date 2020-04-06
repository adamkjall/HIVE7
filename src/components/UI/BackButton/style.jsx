import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledBack = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  border: none;
  background-color: ${colors.white};

  .back {
    padding: ${spacing.small} ${spacing.small} 0;
    background-color: ${colors.white};
    border: none;
  }
`;
