import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import bock from '../../../assets/icons/bock.svg';
export const StyledCheckBox = styled.div`
  font-size: ${fontSizes.m};
  max-height: 50px;

  .container {
    width: 100%;
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
    z-index: 2;

    &.checked {
      background-color: ${colors.red};
      background-image: url(${bock});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      border: 2px ${colors.red} solid;
      padding: 2px;
      border-radius: 3px;
    }

  }



  .checkbox {
    position: absolute;
    left: -9999px; 
    /* height: 23px;
    width: 23px;
    content: '';
    appearance: none !important;
    outline: none !important;
    z-index: -1;

    &:before {
      content: '';
      width: 23px;
      height: 23px;
      outline: none !important;
      appearance: none !important;
      z-index: -1;
    }

    &:checked {
      background-color: ${colors.red};
      content: '';
      background-image: url(${bock});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      border: 2px ${colors.red} solid;
      width: 23px;
      height: 23px;
      position: relative;
      top: -2px;
      left: -2px;
      padding: 2px;
      appearance: none !important;
      outline: none !important;
      border-radius: 3px;
      z-index: -1;
    } */
  }
`;
