import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import chat from '../../assets/icons/chat.svg';
import walking from '../../assets/icons/walking.svg';
import { StyledNav, StyledNavLink } from './style';
import avatar from '../../assets/icons/profilepic.svg';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { user } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <StyledNav {...props}>
      <StyledNavLink as={NavLink} to="/choosechat">
        <img src={chat} alt="Chosechat" />
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/feed">
        <img src={walking} alt="promenad" />
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/private">
        <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
      </StyledNavLink>
    </StyledNav>
  ) : null;
};

export default Nav;
