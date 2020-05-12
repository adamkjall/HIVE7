import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledFeedView = styled.div`
  height: calc(100vh - 48px);
`;

export const StyledFeedContainer = styled.div`
  height: calc(100% - 49px);
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
  height: 86px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: ${spacing.tiny};
    color: ${colors.black};
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border: none;
    background: none;

    p {
      margin: 1.2rem 0 0 0;
      font-size: ${fontSizes.s};
      color: ${colors.red};
    }
    &.active {
      border-bottom: 2px ${colors.red} solid;
    }
  }
`;
