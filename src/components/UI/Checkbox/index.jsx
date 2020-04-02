import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckBox } from './style';
/**
 * @param {string} label passed down as a string.
 * @param {string} id Props passed down as a string.
 * @param {node} icon Props passed down as a node.
 * @param {func} clickHandler Func to handle click.
 * */

const CheckBox = ({ label, icon, id, clickHandler }) => (
  <StyledCheckBox>
    <label htmlFor={id} className="container" onChange={clickHandler}>
      <img src={icon} alt={label} />
      {label}
      <span className="checkbox-styled">
        <input type="checkbox" id={id} className="checkbox" />
      </span>
    </label>
  </StyledCheckBox>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
};

CheckBox.defaultProps = {
  label: 'default',
  icon: 'default',
  id: 'default',
  clickHandler: null
};

export default CheckBox;
