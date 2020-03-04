import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from 'components/UI/FieldWrapper';
import Label from 'components/UI/Label';

import { StyledInput } from './style';

const Input = ({ label, id, inline, wrapperProps, ...props }) => (
  <FieldWrapper inline={inline} {...wrapperProps}>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput id={id} {...props} />
  </FieldWrapper>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  wrapperProps: PropTypes.object
};

Input.defaultProps = {
  type: 'text',
  inline: false
};

export default Input;
