import styled from 'styled-components';

import Link from 'components/UI/Link';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${spacing.tiny};
  background: ${colors.gray1};
`;

export const StyledNavLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em ${spacing.tiny};
  color: ${colors.gray5};
  text-decoration: none;
  cursor: pointer;
`;
