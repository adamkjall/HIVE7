import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledFeed = styled.div`
  display: 'flex';
  align-items: 'flex-start';
  position: relative;
`;

export const StyledBookedWalksHeader = styled.div`
  display: flex;
  align-items: center;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    .counter {
      background-color: ${colors.greenMid};
      padding: 0.2rem 0.5rem;
      border-radius: 50%;

      &.hide {
        visibility: hidden;
      }
    }
  }
`;
