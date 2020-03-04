import styled, { css } from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledGrid = styled.div`
  display: grid;
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  align-items: ${({ align }) => align};
  justify-content: ${({ center }) => (center ? 'center' : 'initial')};
  justify-items: ${({ align }) => (align === 'flex-start' ? 'stretch' : align)};
  margin: ${({ margins }) => margins};
  max-width: ${({ maxWidth }) => maxWidth};

  ${({ rowGap }) =>
    Array.isArray(rowGap)
      ? rowGap.map(breakpoint =>
          breakpoint.break
            ? css`
                @media all and (min-width: ${breakpoint.break}) {
                  row-gap: ${breakpoint.rowGap}px;
                }
              `
            : css`
                row-gap: ${breakpoint.rowGap}px;
              `
        )
      : css`
          row-gap: ${typeof rowGap === 'number' ? `${rowGap}px` : spacing[rowGap]};
        `};

  ${({ columns, minColumnWidth }) =>
    Array.isArray(columns)
      ? columns.map(breakpoint =>
          breakpoint.break
            ? css`
                @media all and (min-width: ${breakpoint.break}) {
                  grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));
                }
              `
            : css`
                grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));
              `
        )
      : css`
          grid-template-columns: repeat(
            ${columns},
            ${minColumnWidth ? `minmax(${minColumnWidth}, 1fr)` : 'minmax(0, 1fr)'}
          );
        `};

  ${({ columnGap }) =>
    Array.isArray(columnGap)
      ? columnGap.map(breakpoint =>
          breakpoint.break
            ? css`
                @media all and (min-width: ${breakpoint.break}) {
                  column-gap: ${typeof breakpoint.columnGap === 'number'
                    ? `${breakpoint.columnGap}px`
                    : spacing[breakpoint.columnGap]};
                }
              `
            : css`
                column-gap: ${typeof breakpoint.columnGap === 'number'
                  ? `${breakpoint.columnGap}px`
                  : spacing[breakpoint.columnGap]};
              `
        )
      : css`
          column-gap: ${typeof columnGap === 'number' ? `${columnGap}px` : spacing[columnGap]};
        `};
`;
