import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledFeedView = styled.div`
  height: 90vh;
`;

export const StyledFeedContainer = styled.div`
  height: 80vh;
`;

export const StyledNav = styled.nav`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  height: 10vh;

  button {
    font-family: ${fontFamilies.fontRegular};
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.black};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border: none;
    background: none;

    p {
      margin: 0.5rem 0 0.3rem;
      font-size: ${fontSizes.s};
      color: ${colors.red};
    }
    &.active {
      border-bottom: 2px ${colors.red} solid;
      font-weight: bold;
    }
    :focus {
      outline: none;
    }
  }
`;
