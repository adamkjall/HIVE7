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
  align-items: center;
  color: ${colors.gray4};
  text-decoration: none;
  text-align: center;
  height: 10vh;
  cursor: pointer;

  p {
    margin: 0.1rem 0 0;
    font-size: ${fontSizes.microcopy};
  }

  .avatar {
    align-self: center;
    max-width: 31px;
    max-height: 31px;
  }

  &.${activeClassName} {
    p {
      color: ${colors.red};
    }
  }
  .inactive-chat-container {
    position: relative;
  }
`;

export const StyledMessageNotification = styled.span`
  position: absolute;
  top: -5px;
  right: -6px;
  height: 13px;
  width: 13px;
  border-radius: 999rem;
  background: ${colors.red};
`;
