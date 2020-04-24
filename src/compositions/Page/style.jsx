import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledContentWrapper = styled.div`
  padding: ${spacing.tiny};

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 414px;
    margin: 0 auto;
    padding: 0 1.5em;
  }
`;
