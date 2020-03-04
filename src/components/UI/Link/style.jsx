import styled from 'styled-components';

import colors from 'tokens/colors.mjs';

export const StyledLink = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${colors.gray};
  }

  &:focus {
    color: inherit;
    box-shadow: none !important;
    outline: 0px;
    border: 3px auto -webkit-focus-ring-color !important;
  }

  &:active {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
`;
