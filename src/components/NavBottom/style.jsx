import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

const activeClassName = 'nav-item-active';

export const StyledNavBottom = styled.nav`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  background: ${colors.white};
  border-top: ${colors.gray4} 0.2px solid;
  margin: 0;
  z-index: 1;
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
    max-height: 30px;
    margin: 0 0 ${spacing.tiny} 0;
  }
  &.${activeClassName} {
    border-top: 1px ${colors.black} solid;
    background: ${colors.red};
  }
`;
