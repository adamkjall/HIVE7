import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import chatred from '../../assets/icons/chatred.svg';
import walking from '../../assets/icons/walking.svg';
import { StyledNavBottom, StyledNavLink } from './style';
import avatar from '../../assets/icons/profilepic.svg';

const Nav = props => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { user } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <StyledNavBottom {...props}>
      <StyledNavLink as={NavLink} to="/choosechat">
        <div className="chat-square" />
        <img src={chatred} alt="Chosechat" />
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/feed">
        <div className="promenad">
          <img src={walking} alt="promenad" />
        </div>
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/private">
        <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
      </StyledNavLink>
    </StyledNavBottom>
  ) : null;
};

export default Nav;
