import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

const activeClassName = 'nav-item-active';

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: ${spacing.tiny};
  color: ${colors.black};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  p {
    margin: 0 0 0.5rem 0;
    font-size: ${fontSizes.s};
  }
  img {
    align-self: center;
    max-width: 30px;
    margin: 0 0 ${spacing.tiny} 0;
  }
  &.${activeClassName} {
    border-bottom: 1px ${colors.black} solid;
  }
`;
