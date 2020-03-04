import React from 'react';
import PropTypes from 'prop-types';

import Graphic from 'components/UI/Graphic';
import spinner from 'assets/icons/icon-spinner.svg';

import { StyledLoader } from './style';

const Loader = ({ width, ...props }) => (
  <StyledLoader {...props}>
    <Graphic alt="loader" src={spinner} width={width} />
  </StyledLoader>
);

Loader.propTypes = {
  fullScreen: PropTypes.bool,
  width: PropTypes.string
};

Loader.defaultProps = {
  fullScreen: false
};

export default Loader;
