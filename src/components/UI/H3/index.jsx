import React from 'react';
import PropTypes from 'prop-types';

import { StyledH3 } from './style';

const H3 = props => <StyledH3 {...props} />;

H3.propTypes = {
  center: PropTypes.bool
};

H3.defaultProps = {
  center: false
};

export default H3;
