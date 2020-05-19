import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledTermsCondition = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  color: ${colors.black};
  background-color: ${colors.white};
  z-index: 2;
  overflow-y: scroll;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const StyledTermsConditionHeader = styled.div`
  width: 100%;
  font-size: ${fontSizes.h2};
  background: ${colors.gray5};
  font-family: ${fontFamilies.fontLight};
  padding: 0.5rem;
  button {
    background: ${colors.gray5};
    outline: none;
    padding-bottom: 0.3rem;
  }
`;

export const StyledTermsConditionContent = styled.div`
  font-size: ${fontSizes.s};
  img {
    width: 100%;
    position: relative;
    top: -7px;
  }
  .text {
    width: 100%;
    max-width: 420px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;
