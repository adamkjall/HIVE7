import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSize from 'tokens/fontSizes.mjs';

export const StyledFeed = styled.div`
  display: 'flex';
  align-items: 'flex-start';
  position: relative;
`;

export const StyledBookedWalksHeader = styled.div`
  display: flex;
  align-items: center;
  .container {
    .arrow-container {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: ${spacing.small};

      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.red};
        color: ${colors.white};
        font-size: ${fontSize.s};
        width: 22px;
        height: 22px;
        border-radius: 999rem;
        margin-right: 8px;
        &.hide {
          visibility: hidden;
        }
      }

      .down-arrow {
        .up {
          -ms-transform: rotate(120deg);
          transform: rotate(180deg);
        }
      }
    }
  }
`;
