import React from 'react';
import PropTypes from 'prop-types';

import { StyledFieldWrapper } from './style';

const FieldWrapper = props => <StyledFieldWrapper {...props} />;

FieldWrapper.propTypes = {
  inline: PropTypes.bool
};

FieldWrapper.defaultProps = {
  inline: false
};

export default FieldWrapper;
