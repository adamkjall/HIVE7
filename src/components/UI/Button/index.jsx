import React from 'react';
import PropTypes from 'prop-types';

import { NATURES, StyledButton } from './style';

const Button = ({ stretch, ...props }) => <StyledButton stretch={stretch ? 1 : 0} {...props} />;

Button.propTypes = {
  nature: PropTypes.oneOf(Object.keys(NATURES)),
  stretch: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  nature: 'default',
  stretch: false,
  type: 'button' // ['button', 'submit', 'reset']
};

export default Button;
