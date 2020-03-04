import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledImage } from './style';

// transparent gif: credits to https://github.com/aFarkas/lazysizes#modern-transparent-srcset-pattern
export const PRELOADING_SRC =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

/**
 * Lazy-loaded image component: the src attribute is initially set to a transparent gif
 * then replaced by the actual src when lazyload initialises.
 *
 * If you need to display different resolutions for different devices/screen sizes
 * You can take advantage of the srcset & sizes props:
 * <Image
 *  caption="nice responsive image"
 *  src="image-320px.jpg"
 *  srcset="image-320px.jpg 20em, image-480px.jpg 30em, image-768px.jpg 48em" sizes="auto"
 * />
 */
const Image = ({ caption, className, src, srcset, sizes, ...props }) => {
  const image = useRef();

  useEffect(() => {
    if (image && image.current) {
      // If the image was already loaded, we need to reset the 'lazyload' class so the picture is re-lazyloaded.
      image.current.src = PRELOADING_SRC;
      image.current.classList.remove('lazyloaded');
      image.current.classList.add('lazyload');
    }
  }, [src]);

  return (
    <StyledImage
      {...props}
      alt={caption}
      src={src}
      srcSet={PRELOADING_SRC}
      data-src={src}
      data-srcset={srcset || src}
      data-sizes={sizes}
      title={caption}
      className={`lazyload ${className}`.trim()}
      ref={image}
    />
  );
};

Image.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string
};

Image.defaultProps = {
  caption: 'Image caption',
  className: '',
  sizes: 'auto',
  srcset: ''
};

export default Image;
