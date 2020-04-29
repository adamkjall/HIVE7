import React, { useContext, useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';

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
import calculateAge from '../../helpers/functions/calculateAge';
import avatar from '../../assets/icons/profilepic.svg';
import waves from '../../assets/icons/waves.svg';
import UploadFile from '../../components/UploadFile';

import NavBottom from 'components/NavBottom';
import { StyledPrivate } from './style';

const PrivateView = () => {
  const [toogle, setToogle] = useState(false);
  const history = useHistory();
  const { user } = useContext(AuthenticationContext);
  const [oldName, setOldName] = useState(null);

  const toogleChangepic = e => {
    setToogle(!toogle);
  };

  const handleDeleteAccount = () => {
    () => deleteUserAccount(user.id);
    history.push('/logout');
  };

  return (
    <Page metadata={{ title: 'Private view' }}>
      {!user ? (
        <div></div>
      ) : (
        <StyledPrivate>
          <NavBottom />
          <div className="profilebox-1">
            <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
            <span
              className="changepic"
              tabIndex="-5"
              role="button"
              aria-label="toogle"
              onClick={toogleChangepic}
              onKeyDown={toogleChangepic}
            >
              Byt bild
            </span>
            <H3 className="user">
              {user.displayName}
              {user.username}
            </H3>
            <span className="usersage">
              {calculateAge(user.dateOfBirth)} år &#9679; {user.lvlOfSwedish}
            </span>
          </div>
          <img src={waves} alt="wave" className="waves" />
          {toogle ? <UploadFile /> : null}
          <div className="change-allinfo-wrapper">
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
                <span className="display">
                  {user.displayName}
                  {user.username}
                </span>
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
                  <span className="display"> ******</span>
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
              <button
                className="change toleft"
                aria-label="logga ut"
                onClick={() => history.push('/logout')}
              >
                Logga ut
              </button>
            </div>
            <p className="bold">Ta bort konto</p>
            <div className="changecontainer">
              <button className="change" onClick={handleDeleteAccount}>
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
