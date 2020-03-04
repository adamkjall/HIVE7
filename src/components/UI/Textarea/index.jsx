import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from 'components/UI/FieldWrapper';
import Label from 'components/UI/Label';

import { StyledTextarea } from './style';

const Textarea = ({ label, id, inline, wrapperProps, ...props }) => (
  <FieldWrapper inline={inline} {...wrapperProps}>
    <Label htmlFor={id}>{label}</Label>
    <StyledTextarea id={id} {...props} />
  </FieldWrapper>
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  label: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object
};

Textarea.defaultProps = {
  inline: false
};

export default Textarea;
