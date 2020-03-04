import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from 'components/UI/FieldWrapper';
import Label from 'components/UI/Label';

import { StyledSelect } from './style';

const Select = ({ children, label, id, inline, options, wrapperProps, ...props }) => (
  <FieldWrapper inline={inline} {...wrapperProps}>
    <Label htmlFor={id}>{label}</Label>
    <StyledSelect id={id} {...props}>
      {children
        ? children // If children are provided, they will take precedence over the "options" prop
        : options.map(option => (
            <option id={option} value={option} key={`select.${id}.${option}`}>
              {option}
            </option>
          ))}
    </StyledSelect>
  </FieldWrapper>
);

Select.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  wrapperProps: PropTypes.object
};

Select.defaultProps = {
  inline: false,
  options: []
};

export default Select;
