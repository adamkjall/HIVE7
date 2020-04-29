import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledContainer = styled.div`
  padding: ${spacing.small};
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .buttons {
    display: flex;
    flex-direction: column;
    margin: 0 36px;

    button {
      margin: 0.8rem 0;
    }
  }
`;
