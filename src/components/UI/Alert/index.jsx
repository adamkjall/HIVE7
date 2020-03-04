import React from 'react';
import { oneOf, string } from 'prop-types';

import { SIZES, STATUSES, StyledAlert } from './style';

const Alert = props => <StyledAlert {...props} />;

Alert.propTypes = {
  size: oneOf(Object.keys(SIZES)),
  status: oneOf(Object.keys(STATUSES)),
  position: string,
  placement: oneOf(['bottom', 'top']) // to combine with position: "fixed"
};

Alert.defaultProps = {
  size: 'medium',
  status: 'info',
  position: 'relative'
};

export default Alert;
