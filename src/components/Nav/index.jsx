import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import { StyledNav, StyledNavLink } from './style';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <StyledNav {...props}>
      {/* <StyledNavLink as={RouterLink} to="/">
        Home
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/form">
        Form
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/examples">
        Examples
      </StyledNavLink> */}
      <StyledNavLink as={RouterLink} to="/landing">
        Landing
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/create">
        Skapa ny promenad
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/feed">
        Lediga promenader
      </StyledNavLink>
      {isAuthenticated ? (
        <StyledNavLink as={RouterLink} to="/private">
          Logga ut
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
