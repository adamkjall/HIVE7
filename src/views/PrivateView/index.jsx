import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import {
  auth,
  deleteUserAccount,
  resetPassword,
  updatePassword,
  updateEmail,
  updateDisplayName,
  updateProfilePicture
} from '../../firebase/firebase.utils';

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
  const [oldName, setOldName] = useState(null);
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <Button as={RouterLink} to="/logout">
                Logga ut
              </Button>
              <Button onClick={() => deleteUserAccount(user.id)}>Ta bort konto</Button>
              <Button
                onClick={() => {
                  resetPassword(user.email);
                  alert(
                    `Ett mail med instruktioner för att återställa ditt lösenord är skickat till ${user.email}`
                  );
                }}
              >
                Återställ lösenord
              </Button>
              <Button
                onClick={() => {
                  console.log(user);

                  if (!oldName) {
                    setOldName(user.displayName);
                    updateDisplayName('Boris');
                  } else {
                    updateDisplayName(oldName);
                    setOldName(null);
                  }
                }}
              >
                {'Nytt användarnamn'}
              </Button>
              {/* <Button>Logga ut</Button>
            <Button>Logga ut</Button> */}
            </div>
          </div>
        </StyledPrivate>
      )}
    </Page>
  );
};

export default PrivateView;
