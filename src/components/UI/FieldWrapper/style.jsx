import styled, { css } from 'styled-components';

import spacing from 'tokens/spacing.mjs';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledFieldWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: ${spacing.small};
  font-size: 16px;

  label {
    margin-bottom: 0.5em;
  }

  /* @media screen and (min-width: ${breakpoints.tablet}) {
    ${({ inline }) =>
      inline
        ? css`
            display: flex;
            align-items: center;
            margin: 0 -0.5em ${spacing.small};

            * {
              margin: 0 0.5em;
            }

            label {
              margin-bottom: 0;
            }
          `
        : null};
  } */
`;
