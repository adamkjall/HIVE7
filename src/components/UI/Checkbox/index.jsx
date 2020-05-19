import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox } from './style';
/**
 * @param {string} label passed down as a string.
 * @param {string} id Props passed down as a string.
 * @param {node} icon Props passed down as a node.
 * @param {func} clickHandler Func to handle click.
 * */

const CheckBox = ({ label, icon, id, labelrigth, clickHandler }) => (
  <StyledCheckBox>
    <label htmlFor={id} className="container" onChange={clickHandler}>
      {icon && <img src={icon} alt={label} />}
      {label && label}
      <span className="checkbox-styled">
        <input type="checkbox" id={id} className="checkbox" />
      </span>
    </label>
    {labelrigth && <span className="labelrigth">{labelrigth}</span>}
  </StyledCheckBox>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  labelrigth: PropTypes.node,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
};

CheckBox.defaultProps = {
  id: 'default',
  clickHandler: null
};

export default CheckBox;
