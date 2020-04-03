import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';

import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Paragraph from 'components/UI/Paragraph';

import avatar from '../../assets/icons/profilepic.svg';

import { StyledPrivate } from './style';

const PrivateView = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <Page metadata={{ title: 'Private view' }}>
      {!user ? (
        <div></div>
      ) : (
        <StyledPrivate>
          <div className="box1">
            <img className="avatar" src={avatar} alt="avatar" />
            <span className="changepic">Byt Bild</span>
            <H3 className="user">{user.displayName}</H3>
            <Paragraph className="usersage">{user.dateOfBirth}</Paragraph>
          </div>
          <hr />
          <Paragraph>{user.email}</Paragraph>
          <Paragraph>{user.lvlOfSwedish}</Paragraph>
          <hr />
          <Button as={RouterLink} to="/logout">
            Logga ut
          </Button>
        </StyledPrivate>
      )}
    </Page>
  );
};

export default PrivateView;
