import React from 'react';
import PropTypes from 'prop-types';

import { StyledH1 } from './style';

const H1 = props => <StyledH1 {...props} />;

H1.propTypes = {
  center: PropTypes.bool
};

H1.defaultProps = {
  center: false
};

export default H1;
