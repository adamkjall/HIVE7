import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledButtonCreate = styled.button`
  width: 60px;
  height: 60px;
  padding: ${spacing.tiny};
  background: ${colors.gray2};
  border-radius: 999rem;
  font-size: ${fontSizes.m};
  text-align: 'center';
  text-decoration: none;
  cursor: pointer;
  transition: 0.1s;
  border: none;
  position: -webkit-sticky;
  position: sticky;
  bottom: 1rem;
  align-self: flex-end;
`;
