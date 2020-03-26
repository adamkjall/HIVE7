import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import walking from '../../assets/icons/walking.svg';
import plus from '../../assets/icons/plus.svg';
import navprofile from '../../assets/icons/navprofile.svg';
import { StyledNav, StyledNavLink } from './style';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <StyledNav {...props}>
      {/*
      <StyledNavLink as={RouterLink} to="/form">
        Form
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/examples">
        Examples
      </StyledNavLink> */}
      <StyledNavLink as={RouterLink} to="/create">
        <img src={plus} alt="ny promenad" /> Ny promenad
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/feed">
        <img src={walking} alt="promenad" /> Promenader
      </StyledNavLink>

      {isAuthenticated ? (
        <StyledNavLink as={RouterLink} to="/private">
          <img src={navprofile} alt="profil" /> Profil
        </StyledNavLink>
      ) : (
        <StyledNavLink as={RouterLink} to="/login">
          Logga in
        </StyledNavLink>
      )}
    </StyledNav>
  );
};

export default Nav;
