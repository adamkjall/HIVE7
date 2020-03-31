import styled from 'styled-components';

import Link from 'components/UI/Link';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${spacing.tiny} 0;
  background: ${colors.white};
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    margin: 0 0 ${spacing.tiny} 0;
  }
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  color: ${colors.black};
  text-decoration: none;
  width: 130px;
  text-align: center;
  cursor: pointer;
  &:active {
    border-bottom: 1px black solid;
  }
`;
