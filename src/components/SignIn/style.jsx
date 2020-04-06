import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons {
    margin-top: ${spacing.medium};
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
