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
    margin: 0 0 ${spacing.tiny} 0;
  }

  img {
    margin: 0 0 ${spacing.tiny} 0;
    align-self: center;
  }

  .promenad {
    position: fixed;
    bottom: -1rem;
    left: 43%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
    height: 68px;
    width: 68px;
    background: ${colors.gray4};
  }

  &.${activeClassName} {
    .chat-square {
      position: fixed;
      align-self: center;
      bottom: 19.4px;
      height: 13px;
      width: 19px;
      border-radius: 3px;
      background: ${colors.red};
    }
    .promenad {
      background: ${colors.red};
      border: 2px ${colors.red} solid;
    }
    .avatar {
      padding: 1px;
      border: 2px ${colors.red} solid;
    }
  }
`;
