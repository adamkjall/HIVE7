import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledTextarea = styled.textarea`
  appearance: none;
  flex: 1;
  width: 100%;
  min-height: 150px;
  box-sizing: border-box;
  padding: ${spacing.tiny};
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.s};
  border: 0;
  border-radius: 5px;
  border-bottom: 1px solid ${colors.gray3};
  background-color: ${colors.gray5};

  &:focus {
    outline: 0;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: ${spacing.small};
  }
`;
