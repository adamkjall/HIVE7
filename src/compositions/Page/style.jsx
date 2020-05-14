import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledContentWrapper = styled.div`
  padding: 0;

  @media (min-width: 420px) {
    width: 420px;
    margin: 0 auto;
  }

  @media (min-width: 500px) {
    width: 100%;
    width: 420px;
    margin: 0 auto;
  }
`;
