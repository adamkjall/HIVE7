import React from 'react';
import PropTypes from 'prop-types';

import H1 from '../../UI/H1';
import BackButton from '../../BackButton';
import graywaves from '../../../assets/icons/graywaves.svg';

import { StyledHeader } from './style';

const Header = ({ backbutton, headline }) => (
  <StyledHeader>
    <div className="headcontainer">
      {backbutton ? <BackButton /> : <div />}
      <H1>{headline}</H1>
    </div>
    <img src={graywaves} className="waves" alt="wave" />
  </StyledHeader>
);

Header.propTypes = {
  backbutton: PropTypes.bool,
  headline: PropTypes.string
};

Header.defaultProps = {
  backbutton: false
};

export default Header;
