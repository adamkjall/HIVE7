import React from 'react';
// import PropTypes from 'prop-types';

import H3 from 'components/UI/H3';
import Paragraph from 'components/UI/Paragraph';
import Image from 'components/UI/Image';

import image from 'assets/images/image.jpg';

import { StyledMyComposition } from './style';

const MyComposition = props => (
  <StyledMyComposition {...props}>
    <H3>Some title</H3>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Paragraph>
    <Image caption="some image" src={image} />
  </StyledMyComposition>
);

// MyComposition.propTypes = {};

// MyComposition.defaultProps = {};

export default MyComposition;
