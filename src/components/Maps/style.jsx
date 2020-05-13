import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledMap = styled.div`
  .map {
    margin-top: 1rem;
    width: 100%;
    height: 146px;
    background-color: ${colors.gray4};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .openstreetmap {
      font-size: ${fontSizes.s};
      margin: 0;
    }
  }

  .position {
    font-size: ${fontSizes.m};
    background-color: ${colors.red};
    padding: 10px 15px;
    color: ${colors.white};
    border-radius: 999rem;
    width: 180px;
  }
`;
