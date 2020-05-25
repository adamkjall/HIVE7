import React from 'react';
import PropTypes from 'prop-types';

import H1 from '../../UI/H1';
import BackButton from '../../BackButton';
import graywaves from '../../../assets/icons/graywaves.svg';

import { StyledHeader } from './style';

const Header = ({ backbutton, backbuttoncross, headline }) => (
  <StyledHeader>
    <div className="headcontainer">
      {backbutton && <BackButton />}
      {backbuttoncross && <BackButton showcross />}
      <H1>{headline}</H1>
      {!backbutton || !backbuttoncross ? <div /> : <div />}
    </div>
    <img src={graywaves} className="waves" alt="wave" />
  </StyledHeader>
);

Header.propTypes = {
  backbutton: PropTypes.bool,
  backbuttoncross: PropTypes.bool,
  headline: PropTypes.string
};

Header.defaultProps = {
  backbutton: false,
  backbuttoncross: false
};

export default Header;
