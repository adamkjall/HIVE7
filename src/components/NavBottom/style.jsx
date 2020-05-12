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
  color: ${colors.black};
  text-decoration: none;
  text-align: center;
  height: 48px;
  cursor: pointer;

  p {
    margin: 0 0 0.5rem 0;
    font-size: ${fontSizes.s};
  }

  .avatar {
    align-self: center;
    max-width: 31px;
    max-height: 31px;
  }

  .promenad {
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
    height: 68px;
    width: 68px;
    background: ${colors.white};
    border: 2px ${colors.red} solid;
  }

  &.${activeClassName} {
    .promenad {
      background: ${colors.red};
    }
    .avatar {
      padding: 1px;
      border: 2px ${colors.red} solid;
    }
  }

  .unactive-chat-container {
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
