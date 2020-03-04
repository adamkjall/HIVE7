import React from 'react';
import PropTypes from 'prop-types';

import { StyledPicture } from './style';

import Image from 'components/UI/Image';

const Picture = ({ caption, children, pictureProps, sizes, sources, ...props }) => (
  <StyledPicture {...pictureProps}>
    {sources.map(({ sizes: sourceSizes, ...source }) => (
      <source key={`source-${caption}-${source.type}`} sizes={sourceSizes || sizes} {...source} />
    ))}
    <Image caption={caption} sizes={sizes} {...props} />
    {children}
  </StyledPicture>
);

Picture.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.node,
  pictureProps: PropTypes.object,
  sizes: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
      type: PropTypes.string.isRequired, // ['image/webp', 'image/jpeg', 'image/png', 'image/gif'] ...
      sizes: PropTypes.string // Allow to override the "sizes" prop for one specific source if needed
    })
  )
};

Picture.defaultProps = {
  pictureProps: {},
  sizes: 'auto',
  sources: []
};

export default Picture;
