import styled, { css } from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const NATURES = {
  default: 'default',
  primary: 'primary'
};

const getNatureStyle = ({ nature }) =>
  ({
    default: css`
      color: ${colors.white};
      background-color: ${colors.black};
    `,
    primary: css`
      color: ${colors.white};
      background-color: ${colors.blue};
    `
  }[nature in NATURES ? nature : 'default']);

export const StyledButton = styled.button`
  appearance: none;
  display: ${({ stretch }) => (stretch ? 'block' : 'inline-block')};
  width: ${({ stretch }) => (stretch ? '100%' : 'auto')};
  padding: ${spacing.tiny} ${spacing.small};
  min-height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: ${fontSizes.m};
  text-align: ${({ stretch }) => (stretch ? 'center' : 'initial')};
  text-decoration: none;
  cursor: pointer;
  transition: 0.1s;
  ${props => getNatureStyle(props)};

  &:hover {
    box-shadow: 0 0.5rem 1rem -0.5rem ${colors.gray3};
    transition: 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    border: 0;
    color: ${colors.gray1};
    background-color: ${colors.red};
    transition: 0.2s;
  }
`;
