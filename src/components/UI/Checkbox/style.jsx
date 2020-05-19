import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledCheckBox = styled.div`
  font-size: ${fontSizes.m};
  max-height: 50px;
  width: 280px;
  .container {
    display: grid;
    grid-template-columns: 50px auto 23px;
    grid-template-rows: 50px;

    img {
      justify-self: center;
    }
  }
  .labelrigth {
    position: relative;
    top: -3.2rem;
    right: -4.5rem;
    font-size: ${fontSizes.s};
  }
  .checkbox-styled {
    height: 23px;
    width: 23px;
    background-color: ${colors.white};
    border: 2px ${colors.gray2} solid;
    border-radius: 3px;
  }

  .checkbox {
    height: 20px;
    width: 20px;
    content: '';
    appearance: none;
    outline: none;
    &:before {
      content: '';
      width: 19px;
      height: 19px;
    }

    &:checked {
      background-color: ${colors.red};
      content: url("data:image/svg+xml;charset=UTF-8, <svg width='18' height='13' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.5 1L6.5 11L1 6.5' stroke='white' stroke-width='1.5'/></svg>");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 23px;
      height: 23px;
      position: relative;
      top: -2px;
      left: -2px;
      padding: 2px;
      outline: none;
      border-radius: 3px;
    }
  }
`;
