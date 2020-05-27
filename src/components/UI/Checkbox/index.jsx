import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox } from './style';
/**
 * @param {string} label passed down as a string.
 * @param {string} id Props passed down as a string.
 * @param {node} icon Props passed down as a node.
 * */

const CheckBox = ({ label, icon, id, labelrigth, isChecked, clickHandler }) => {
  return (
    <StyledCheckBox>
      <label htmlFor={id} className="container">
        {icon && <img src={icon} alt={label} />}
        {label && label}
        <span className={`checkbox-styled ${isChecked ? 'checked' : ''}`}>
          <input type="checkbox" id={id} className="checkbox" onClick={clickHandler} />
        </span>
      </label>
      {labelrigth && <span className="labelrigth">{labelrigth}</span>}
    </StyledCheckBox>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  labelrigth: PropTypes.node,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired
};

CheckBox.defaultProps = {
  id: 'default'
};

export default CheckBox;
