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
        Starta ny
      </StyledNavLink>
      <StyledNavLink as={RouterLink} to="/feed">
        Följ med
      </StyledNavLink>
      {isAuthenticated ? (
        <StyledNavLink as={RouterLink} to="/private">
          Logut
        </StyledNavLink>
      ) : (
        <StyledNavLink as={RouterLink} to="/login">
          Login
        </StyledNavLink>
      )}
    </StyledNav>
  );
};

export default Nav;
