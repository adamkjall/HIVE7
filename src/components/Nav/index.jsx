import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import walking from '../../assets/icons/walking.svg';
import navprofile from '../../assets/icons/navprofile.svg';
import { StyledNav, StyledNavLink } from './style';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <StyledNav {...props}>
      <StyledNavLink as={NavLink} to="/feed">
        <img src={walking} alt="promenad" />
        <p>Promenader</p>
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/private">
        <img src={navprofile} alt="profil" />
        <p>Profil</p>
      </StyledNavLink>
    </StyledNav>
  ) : null;
};

export default Nav;
