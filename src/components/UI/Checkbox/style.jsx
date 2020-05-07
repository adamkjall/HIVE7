import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledCheckBox = styled.div`
  font-size: ${fontSizes.m};
  color: ${colors.gray1};
  .container {
    display: grid;
    grid-template-columns: 50px auto 25px;
    grid-template-rows: 50px;
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
    content: '';
  }

  .checkbox:checked {
    background-color: ${colors.red};
    content: '\f096';
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`;
