import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import walking from '../../assets/icons/walking.svg';
import navprofile from '../../assets/icons/navprofile.svg';
import { StyledNav, StyledNavLink } from './style';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <StyledNav {...props}>
      <StyledNavLink as={RouterLink} to="/feed">
        <img src={walking} alt="promenad" />
        Promenader
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/private">
        <img src={navprofile} alt="profil" /> Profil
      </StyledNavLink>
    </StyledNav>
  ) : null;
};

export default Nav;
