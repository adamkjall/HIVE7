import styled, { css } from 'styled-components';

export const StyledGridChild = styled.div`
  justify-self: ${({ align }) => align};
  align-self: ${({ alignSelf }) => alignSelf};
  padding: ${({ padding }) => padding};
  grid-row-start: ${({ rowStart }) => rowStart && `${rowStart}`};
  grid-row-end: ${({ rowSpan }) => rowSpan && `span ${rowSpan}`};

  ${({ columnSpan }) => {
    return Array.isArray(columnSpan)
      ? columnSpan
          .map(breakpoint =>
            breakpoint.break
              ? `
                  @media all and (min-width: ${
                    typeof breakpoint.break === 'number'
                      ? `${breakpoint.break}px`
                      : breakpoint.break
                  }) {
                    display: ${breakpoint.display || 'initial'};
                    grid-column: ${breakpoint.start ? `${breakpoint.start} /` : ''}
                      ${breakpoint.columns ? `span ${breakpoint.columns}` : '-1'};
                  }
                `
              : `
                  display: ${breakpoint.display || 'initial'};
                  grid-column: ${breakpoint.start ? `${breakpoint.start} /` : ''}
                    ${breakpoint.columns ? `span ${breakpoint.columns}` : -1};
                `
          )
          .join('\n')
      : css`
          grid-column: ${columnSpan || '1 / -1'};
        `;
  }};
`;
