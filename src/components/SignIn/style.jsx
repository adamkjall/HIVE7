import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-in-middle {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: 80vh;

    .input-in-middle {
      width: 90vw;
      margin: 0 auto 0;
      max-width: 315px;

      label {
        font-size: ${fontSizes.s};
      }

      .forgotten {
        font-size: ${fontSizes.s};
        color: ${colors.red};
        text-decoration: underline;
        letter-spacing: 0.3px;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      button {
        margin-bottom: 1rem;
      }
    }
  }
`;
