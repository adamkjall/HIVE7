import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import {
  deleteAccount,
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
import calculateAge from '../../helpers/functions/calculateAge';
import avatar from '../../assets/icons/profilepic.svg';

import { StyledPrivate } from './style';

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
            <button aria-label="ändra bild" className="change changepic">
              Byt Profilbild
            </button>
            <H3 className="user">{user.displayName}</H3>
            <span className="usersage">
              {calculateAge(user.dateOfBirth)} år &#9679; {user.lvlOfSwedish}
            </span>
          </div>
          <div>
            <div>
              <p className="bold">E-postadress:</p>
              <div className="changecontainer">
                <span className="display">{user.email}</span>
                <button aria-label="ändra e-post" className="change">
                  Ändra
                </button>
              </div>
            </div>
            <div>
              <p className="bold">Användarnamn:</p>
              <div className="changecontainer">
                <span className="display"> {user.displayName}</span>
                <button
                  aria-label="ändra namn"
                  className="change"
                  onClick={() => {
                    if (!oldName) {
                      setOldName(user.displayName);
                      updateDisplayName('Boris');
                    } else {
                      updateDisplayName(oldName);
                      setOldName(null);
                    }
                  }}
                >
                  Ändra
                </button>
              </div>
              <div>
                <p className="bold">Lösenord:</p>
                <div className="changecontainer">
                  <span className="display"> *******</span>
                  <button
                    aria-label="ändra lösenord"
                    className="change"
                    onClick={() => {
                      updatePassword('hiveseven');
                      alert('Ditt lösenord är nu "hiveseven"');
                    }}
                  >
                    Ändra till hiveseven
                  </button>

                  <button
                    className="change"
                    onClick={() => {
                      resetPassword(user.email);
                      alert(
                        `Ett mail med instruktioner för att återställa ditt lösenord är skickat till ${user.email}`
                      );
                    }}
                  >
                    Återställ lösenord
                  </button>
                </div>
              </div>
            </div>
            <p className="bold">Logga ut:</p>
            <div className="changecontainer">
              <button className="change toleft" aria-label="logga ut" as={RouterLink} to="/logout">
                Logga ut
              </button>
            </div>
            <p className="bold">Ta bort konto</p>
            <div className="changecontainer">
              <button className="change" onClick={() => deleteUserAccount(user.id)}>
                Ta bort konto
              </button>
            </div>
          </div>
        </StyledPrivate>
      )}
    </Page>
  );
};

export default PrivateView;
