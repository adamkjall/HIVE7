import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledInput = styled.input`
  appearance: none;
  flex: 1;
  width: 100%;
  padding: ${spacing.tiny};
  box-sizing: border-box;
  font-size: ${fontSizes.body1};
  line-height: 1;
  border: 1px solid ${colors.gray3};
  border-radius: 10px;
  background-color: ${colors.white};

  &:focus {
    outline: 0;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: ${spacing.small};
  }
`;
