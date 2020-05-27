import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledInput = styled.input`
  appearance: none;
  flex: 1;
  width: 100%;
  padding: 0.6rem;
  box-sizing: border-box;
  font-size: ${fontSizes.s};
  line-height: 1;
  border: 1px solid ${colors.gray3};
  border-radius: 10px;
  background-color: ${colors.white};

  &:focus {
    outline: 0;
  }
`;
