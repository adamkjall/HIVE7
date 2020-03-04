import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './style';

const Label = props => <StyledLabel {...props} />;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
