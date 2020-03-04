import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledSelect = styled.select`
  appearance: none;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing.tiny};
  background-color: ${colors.gray5};
  border: 0;
  border-bottom: 1px solid ${colors.gray3};
  border-radius: 5px;
  background-color: ${colors.gray5};

  &:focus {
    outline: none;
  }

  option {
    padding: ${spacing.small} ${spacing.tiny};
    line-height: 1.4em !important;

    &:disabled {
      color: ${colors.gray2};
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: ${spacing.small};
  }
`;
