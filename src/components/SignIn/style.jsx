import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: ${fontSizes.s};
  }

  .form-in-middle {
    display: flex;
    flex-direction: column;

    .input-in-middle {
      width: 90vw;
      padding: 1rem 0;
      display: grid;
      grid-template-rows: 1fr 1fr;

      .buttons {
        width: 90vw;
      }
    }
  }

  .buttons {
    width: 90vw;
  }
`;
