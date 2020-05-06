import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledFeed = styled.div``;

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;

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
      margin: 0 0 0.5rem 0;
      font-size: ${fontSizes.s};
      color: ${colors.red};
    }
    img {
      align-self: center;
      max-width: 30px;
      margin: 0 0 ${spacing.tiny} 0;
    }
    &.active {
      border-bottom: 2px ${colors.red} solid;
    }
  }
`;
