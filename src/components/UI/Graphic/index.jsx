import React from 'react';
import PropTypes from 'prop-types';

import { StyledGraphicWrapper, StyledGraphic } from './style';

const Graphic = ({ wrapperProps, ...props }) => (
  <StyledGraphicWrapper {...wrapperProps}>
    <StyledGraphic {...props} />
  </StyledGraphicWrapper>
);

Graphic.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  wrapperProps: PropTypes.object
};

Graphic.defaultProps = {
  width: '40px'
};

export default Graphic;
