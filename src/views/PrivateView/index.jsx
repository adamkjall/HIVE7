import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import Loader from 'react-loader-spinner';
import imageCompression from 'browser-image-compression';
import calculateAge from '../../helpers/functions/calculateAge';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';
import H3 from 'components/UI/H3';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import TermsCondition from '../../components/TermsCondition';

import avatar from '../../assets/icons/profilepic.svg';
import rightArrow from '../../assets/icons/right-arrow-red.svg';

import { StyledPrivate, StyledProgress } from './style';

const PrivateView = () => {
  const history = useHistory();
  const { user, deleteAccount } = useContext(AuthenticationContext);
  const [toogleReadMore, setToogleReadMore] = useState(false);
  const [toogleDelete, setToogleDelete] = useState(false);
  const [toogleSignOut, setToogleSignOut] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [file, setFile] = useState(null);
  const [fileLoading, setFileLoading] = useState({
    isLoading: false,
    percent: 0
  });

  const handleDeleteAccount = async () => {
    if (!(inputs.email.length && inputs.password.length)) return;
    setLoading(true);

    try {
      await deleteAccount(inputs.email, inputs.password);
    } catch (err) {
      console.log('Error deleting accoung', err);
      setLoading(false);
    }
  };

  const onFileChange = async e => {
    setFileLoading({ isLoading: false, percent: 0 });
    const imageFile = e.target.files[0];
    const options = {
      maxWidthOrHeight: 300,
      maxSizeMB: 0.5,
      useWebWorker: true,
      onProgress: percent => setFileLoading({ isLoading: true, percent })
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      setFileLoading({ isLoading: false, percent: 0 });
      setFile(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page metadata={{ title: 'Profilsida' }} displayNavBottom>
      {!user ? (
        <div></div>
      ) : (
        <StyledPrivate>
          <div className="profilebox-1">
            <div className="uploadfile-wrapper">
              {fileLoading.isLoading ? (
                <StyledProgress>
                  <CircularProgressbar
                    percentage={fileLoading.percent}
                    text={`${fileLoading.percent}%`}
                  />
                </StyledProgress>
              ) : (
                <>
                  <input type="file" id="file" onChange={onFileChange} accept="image/*" />
                  <label className="file-upload" htmlFor="file">
                    {file ? (
                      <>
                        <img className="avatar" src={URL.createObjectURL(file)} alt="profile" />
                      </>
                    ) : (
                      <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
                    )}
                    <span className="swap-profile-picture">Byt profilbild</span>
                  </label>
                </>
              )}
            </div>
            <H3 className="user">
              {user.displayName ? user.displayName.split(' ')[0] : ''} <div className="greendott" />{' '}
              {calculateAge(user.dateOfBirth)} år{' '}
            </H3>
            <p className="usersage">{user.lvlOfSwedish}</p>
          </div>

          <div className="change-allinfo-wrapper">
            <>
              <p className="bold">E-post:</p>
              <div className="changecontainer">
                <span className="display">{user.email}</span>
              </div>
            </>
            <div className="logut-container">
              <button className="menu-btn" onClick={() => setToogleReadMore(!toogleReadMore)}>
                <p className="bold">Allmänna villkor</p>
                <img src={rightArrow} alt="" />
              </button>
              {toogleReadMore && (
                <div className="overlay">
                  <TermsCondition onClose={() => setToogleReadMore(!toogleReadMore)} />
                </div>
              )}
              <button
                className="menu-btn"
                aria-label="logga ut"
                onClick={() => setToogleSignOut(!toogleSignOut)}
              >
                <p className="bold">Logga ut</p>
                <img src={rightArrow} alt="" />
              </button>
              {toogleSignOut && (
                <div className="overlay">
                  <div className="whitebox">
                    <p className="superbold">Logga ut?</p>
                    <p>Är du säker på att du vill logga ut? </p>
                    <div className="button-container">
                      <Button className="warning" onClick={() => setToogleSignOut(!toogleSignOut)}>
                        AVBRYT
                      </Button>
                      <Button className="warning" onClick={() => history.push('/logout')}>
                        LOGGA UT
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <button className="menu-btn delete" onClick={() => setToogleDelete(!toogleDelete)}>
                <p className="bold">Ta bort konto</p>
                <img src={rightArrow} alt="" />
              </button>
              {toogleDelete && (
                <div className="overlay">
                  <div className="whitebox">
                    {loading ? (
                      <Loader
                        className="loader"
                        type="Oval"
                        color="rgba(242, 112, 99, 1)"
                        height={80}
                        width={80}
                      />
                    ) : (
                      <>
                        <p className="superbold">Ta bort konto?</p>
                        <p>Ange e-post & lösenord för att ta bort ditt konto.</p>
                        <Input
                          className="remove-acc-input"
                          type="email"
                          autoComplete="email"
                          placeholder="E-post"
                          id="email"
                          inline
                          name="email"
                          value={inputs.email}
                          onChange={event => setInputs({ ...inputs, email: event.target.value })}
                        />
                        <Input
                          className="remove-acc-input"
                          type="password"
                          autoComplete="current-password"
                          placeholder="Lösenord"
                          id="password"
                          inline
                          name="password"
                          value={inputs.password}
                          onChange={event => setInputs({ ...inputs, password: event.target.value })}
                        />
                        <div className="button-container">
                          <Button
                            className="warning"
                            onClick={() => setToogleDelete(!toogleDelete)}
                          >
                            AVBRYT
                          </Button>
                          <Button
                            className={`warning ${
                              inputs.email.length && inputs.password.length ? '' : 'gray'
                            }`}
                            onClick={handleDeleteAccount}
                          >
                            TA BORT
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </StyledPrivate>
      )}
    </Page>
  );
};

export default PrivateView;
