import React from 'react';
import PropTypes from 'prop-types';

import { StyledGridChild } from './style';

const GridChild = ({ className, ...props }) => (
  <StyledGridChild {...props} className={`GridChild ${className}`.trim()} />
);

GridChild.propTypes = {
  align: PropTypes.oneOf(['end', 'center', 'start', 'stretch']),
  className: PropTypes.string,
  columnSpan: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        break: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        display: PropTypes.string,
        start: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    )
  ]),
  padding: PropTypes.string,
  rowSpan: PropTypes.string,
  rowStart: PropTypes.string
};

GridChild.defaultProps = {
  align: 'stretch',
  className: ''
};

export default GridChild;
