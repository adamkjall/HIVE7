import styled, { css } from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const STATUSES = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning'
};

export const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const getStatusStyle = ({ status }) =>
  ({
    info: css`
      background: ${colors.blueLight};
      color: ${colors.black};

      button {
        background: ${colors.black};
        color: ${colors.white};
      }
    `,
    warning: css`
      background: ${colors.yellow};
      color: ${colors.black};

      button {
        background: ${colors.black};
        color: ${colors.white};
      }
    `,
    error: css`
      background: ${colors.red};
      color: ${colors.white};

      button {
        background: ${colors.white};
        color: ${colors.black};
      }
    `,
    success: css`
      background: ${colors.greenLight};
      color: ${colors.black};

      button {
        background: ${colors.black};
        color: ${colors.white};
      }
    `
  }[status in STATUSES ? status : 'info']);

const getSizeStyle = ({ size }) =>
  ({
    small: css({
      padding: spacing.tiny
    }),
    medium: css({
      padding: spacing.small
    }),
    large: css({
      padding: spacing.medium
    })
  }[size in SIZES ? size : 'medium']);

const getPositionStyle = ({ position, placement }) =>
  css`
    position: ${position};
    ${{
      absolute: css`
        top: ${placement === 'top' ? 0 : 'auto'};
        bottom: ${placement === 'bottom' ? 0 : 'auto'};
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
      `,
      fixed: css`
        top: ${placement === 'top' ? 0 : 'auto'};
        bottom: ${placement === 'bottom' ? 0 : 'auto'};
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
      `
    }[position]};
  `;

export const StyledAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${spacing.small} auto;
  ${props => getPositionStyle(props)};
  ${props => getStatusStyle(props)};
  ${props => getSizeStyle(props)};

  button {
    appearance: none;
    padding: ${spacing.tiny} ${spacing.small};
    border: none;
    font-size: ${fontSizes.m};
    min-height: 0;

    &:last-child {
      margin: 0 0 0 0.25em;
    }
  }
`;
