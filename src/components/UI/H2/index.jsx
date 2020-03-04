import React from 'react';
import PropTypes from 'prop-types';

import { StyledH2 } from './style';

const H2 = props => <StyledH2 {...props} />;

H2.propTypes = {
  center: PropTypes.bool
};

H2.defaultProps = {
  center: false
};

export default H2;
