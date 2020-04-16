import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import H3 from 'components/UI/H3';
import Button from 'components/UI/Button';
import Paragraph from 'components/UI/Paragraph';
import calculateAge from '../../helpers/functions/calculateAge';
import avatar from '../../assets/icons/profilepic.svg';

import { StyledPrivate } from './style';
import Input from '../../components/UI/Input';

const PrivateView = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <Page metadata={{ title: 'Private view' }}>
      {!user ? (
        <div></div>
      ) : (
        <StyledPrivate>
          <div className="profilebox-1">
            <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
            <span className="changepic">Byt Bild</span>
            <H3 className="user">{user.displayName}</H3>
            <span className="usersage">
              {calculateAge(user.dateOfBirth)} år &#9679; {user.lvlOfSwedish}
            </span>
          </div>
          <div>
            <div>
              E-postadress:
              <br />
              {user.email}
            </div>
            <div>
              Lösenord:
              <br /> *******
            </div>
            <hr />
            <Button as={RouterLink} to="/logout">
              Logga ut
            </Button>
          </div>
        </StyledPrivate>
      )}
    </Page>
  );
};

export default PrivateView;
