import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledCheckBox = styled.div`
  margin: ${spacing.tiny};
  font-size: ${fontSizes.p};
  color: ${colors.gray1};

  .container {
    display: grid;
    grid-template-columns: 40px auto 25px;
  }

  .checkbox-styled {
    height: 23px;
    width: 23px;
    background-color: ${colors.white};
    border: 2px ${colors.gray3} solid;
    border-radius: 3px;
  }

  .checkbox {
    height: 20px;
    width: 20px;
    appearance: none;
  }

  .checkbox:checked {
    background-color: ${colors.blue};
    /* background-image: url(../../../assets/icons/check.svg); */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`;
