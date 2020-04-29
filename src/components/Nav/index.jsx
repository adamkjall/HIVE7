import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { StyledNav, StyledNavLink } from './style';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <StyledNav {...props}>
      <StyledNavLink as={NavLink} to="/feed">
        <p>
          Tillgängliga
          <br /> Promenader
        </p>
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/booked">
        <p>
          Mina <br /> Promenader
        </p>
      </StyledNavLink>
    </StyledNav>
  ) : null;
};

export default Nav;
