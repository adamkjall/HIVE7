import React from 'react';
import PropTypes from 'prop-types';

import spacing from 'tokens/spacing.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

import { StyledGrid } from './style';

const Grid = ({ childPadding, className, children, ...props }) => (
  <StyledGrid className={`Grid ${className}`.trim()} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        padding: childPadding
      })
    )}
  </StyledGrid>
);

Grid.propTypes = {
  align: PropTypes.string,
  autoFlow: PropTypes.string,
  childPadding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.any]),
  columnGap: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(spacing)),
    PropTypes.number,
    PropTypes.array
  ]),
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        break: PropTypes.string,
        columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
      })
    ),
    PropTypes.number,
    PropTypes.oneOf(['auto-fit', 'auto-fill'])
  ]),
  margins: PropTypes.string,
  maxWidth: PropTypes.string,
  minColumnWidth: PropTypes.string,
  rowGap: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(spacing)),
    PropTypes.number,
    PropTypes.array
  ])
};

Grid.defaultProps = {
  align: 'stretch',
  childPadding: '',
  className: '',
  columnGap: 60,
  columns: [
    { columns: 1 },
    { break: breakpoints.tablet, columns: 6 },
    { break: breakpoints.desktop, columns: 12 }
  ],
  margins: '0 auto',
  maxWidth: breakpoints.maxPageWidth,
  rowGap: 0,
  autoFlow: 'row'
};

export default Grid;
