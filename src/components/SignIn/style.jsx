import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

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
      display: grid;
      grid-template-columns: 50px 8fr;
      grid-template-rows: 1fr 1px 1fr 1px;
      label {
        font-size: ${fontSizes.s};
      }
      .reddott {
        position: relative;
        left: 15px;
        top: 32px;
      }

      .donedott {
        position: relative;
        left: 15px;
        top: 32px;
      }

      .redline {
        width: 1px;
        height: 50px;
        background-color: ${colors.red};
        position: relative;
        left: 21px;
        top: -24px;
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
