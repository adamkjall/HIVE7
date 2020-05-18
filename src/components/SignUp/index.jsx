import React, { useState } from 'react';
import { differenceInYears } from 'date-fns';

import {
  storage,
  auth,
  createUserProfileDocument,
  updateUserProfileDocument
} from '../../firebase/firebase.utils';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';
import isValidDate from '../../helpers/functions/validDate';
import imageCompression from 'browser-image-compression';

import Button from '../UI/Button';
import H1 from '../UI/H1';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';

import { CircularProgressbar } from 'react-circular-progressbar';

import chooseprofilepic from '../../assets/icons/chooseprofilepic.svg';

import { StyledSignUpContainer, StyledProgress } from './style';

const SignUp = ({ setIsSignedUp }) => {
  const [nextquestionens, setNextQuestions] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgMail, setmsgMail] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msglvl, setMsglvl] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState(null);
  const [fileLoading, setFileLoading] = useState({
    isLoading: false,
    percent: 0
  });
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

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

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const validateEmail = () => {
    console.log('validateemail function to server, before submit!');
  };

  const handleValidateBirthday = () => {
    if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    } else return;
  };

  const onNext = async event => {
    event.preventDefault();
    const year = inputs.dateOfBirth.slice(0, 4);
    const month = inputs.dateOfBirth.slice(4, 6);
    const day = inputs.dateOfBirth.slice(6, 8);
    const diff = differenceInYears(new Date(), new Date(year, month - 1, day));

    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    } else if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    } else if (diff > 120) {
      setMsgBirth('Fyll i det datum du är född.');
    } else if (inputs.email.length <= 4) {
      setmsgMail('Fyll i din epost-adress');
    } else if (inputs.password.length < 6) {
      setPasswordMsg('Ditt Lösenord behöver vara minst 6 tecken.');
    } else if (inputs.password !== inputs.confirmPassword) {
      setConfirmPasswordMsg('Dina lösenord matchar inte');
    } else {
      setMsgName(''), setMsgBirth(''), setmsgMail(''), setMsg(''), setNextQuestions(true);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (isCreatingAccount) return;

    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
      return;
    }
    if (inputs.lvlOfSwedish < 1) {
      setMsglvl('Var vänlig klicka i ett alternativ');
      return;
    }

    if (!file) {
      setMsg('Var vänlig välj en profilbild');
      return;
    }

    try {
      setIsCreatingAccount(true);
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);
      await createUserProfileDocument(user, {
        displayName: inputs.username,
        dateOfBirth: makeStringtoBirthDate(inputs.dateOfBirth),
        lvlOfSwedish: inputs.lvlOfSwedish,
        gender: inputs.gender
      });

      const uploadTask = storage.ref(`profile-pictures/${user.uid}`).put(file); // set unique path

      uploadTask.on(
        'state_changed',
        snapshot => {
          //progress
          const percent = Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        error => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            updateUserProfileDocument(user.uid, { photoUrl: downloadURL });
          });

          setIsCreatingAccount(false);
          setIsSignedUp(true);
        }
      );
    } catch (error) {
      setMsg('Email adressen du angav är redan kopplad till ett konto');
      setIsCreatingAccount(false);
      console.log('Error while sign up', error.message);
    }
  };

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  return (
    <StyledSignUpContainer>
      <form onSubmit={onSubmit}>
        {!nextquestionens ? (
          <div>
            <H1 className="h1-in-center">1/2</H1>
            <div className="signup-form-container">
              {inputs.username.length <= 1 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="name"
                autoComplete="name"
                label="Förnamn och efternamn *"
                id="name"
                inline
                name="username"
                placeholder="Namn Efternamn"
                value={inputs.username}
                onChange={event => onValueChange('username', event.target.value)}
              />

              <div className="redline" />
              <p className="red">{msgName}</p>
              {inputs.email.length <= 4 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="email"
                autoComplete="email"
                label="E-Post *"
                id="email"
                inline
                name="email"
                placeholder="namn.efternamn@gmail.com"
                value={inputs.email}
                onBlur={event => validateEmail('email', event.target.value)}
                onChange={event => onValueChange('email', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{msgMail}</p>
              {inputs.dateOfBirth.length !== 8 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="number"
                autoComplete="bday"
                label="Födelsedatum *"
                id="dateOfBirth"
                inline
                name="dateOfBirth"
                placeholder="ÅÅÅÅMMDD"
                value={inputs.dateOfBirth}
                onBlur={event => handleValidateBirthday('dateOfBirth', event.target.value)}
                onChange={event => onValueChange('dateOfBirth', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{msgBirth}</p>
              {inputs.password.length <= 5 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="password"
                autoComplete="current-password"
                label="Lösenord*"
                id="password"
                inline
                name="password"
                placeholder="********"
                value={inputs.password}
                onChange={event => onValueChange('password', event.target.value)}
              />
              <div className="redline" />
              <p className="red">{passwordMsg}</p>
              {inputs.confirmPassword.length <= 5 || inputs.password !== inputs.confirmPassword ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <Input
                type="password"
                autoComplete="current-password"
                label="Lösenordet igen*"
                id="confirmPassword"
                inline
                name="confirmPassword"
                placeholder="********"
                value={inputs.confirmPassword}
                onChange={event => onValueChange('confirmPassword', event.target.value)}
              />
              <p className="red">{confirmPasswordMsg}</p>
              <p>* Obligatoriska fält</p>
              <div />
            </div>
            <div className="buttondiv">
              <Button className="nextbutton" stretch onClick={onNext}>
                NÄSTA
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <H1 className="h1-in-center">2/2</H1>
            <div className="signup-form-container2">
              {inputs.lvlOfSwedish.length <= 1 ? (
                <div className="reddott nr2" />
              ) : (
                <div className="donedott nr2" />
              )}
              <div className="swedish">
                <p className="bold">Hur är din svenskanivå? *</p>
                <label htmlFor="newSwede">
                  <input
                    type="radio"
                    id="newSwede"
                    name="swedelvl"
                    value="Jag vill lära mig mer svenska"
                    onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
                  />
                  Jag vill lära mig mer svenska
                </label>
                <br />
                <label htmlFor="establish">
                  <input
                    type="radio"
                    id="establish"
                    name="swedelvl"
                    value="Jag pratar flytande svenska"
                    onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
                  />
                  Jag pratar flytande svenska
                </label>
              </div>
              <div className="redline2" />
              <p className="redlvl">{msglvl}</p>
              {inputs.gender.length <= 0 ? (
                <div className="reddott nr2" />
              ) : (
                <div className="donedott nr2" />
              )}
              <div className="gender">
                <p className="bold">Kön? *</p>
                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={event => onValueChange('gender', event.target.value)}
                  />
                  Kvinna
                </label>
                <br />
                <label htmlFor="male">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={event => onValueChange('gender', event.target.value)}
                  />
                  Man
                </label>
                <br />
                <label htmlFor="other">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={event => onValueChange('gender', event.target.value)}
                  />
                  Vill inte ange
                </label>
              </div>
              <div className="redline2" />
              <p className="red">{msgGender}</p>
              {!file ? <div className="reddott" /> : <div className="donedott" />}
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
                      <span className="bold">Välj profilbild *</span>
                      {file ? (
                        <>
                          <img
                            className="profile-picture cover"
                            src={URL.createObjectURL(file)}
                            alt="profile picture"
                          />
                          <span className="swap-profile-picture">Byt profilbild</span>
                        </>
                      ) : (
                        <img
                          className="profile-picture"
                          src={chooseprofilepic}
                          alt="profile picture"
                        />
                      )}
                    </label>
                  </>
                )}
              </div>
              <div />
            </div>
            <p className="red the-bottom-line">{msg}</p>
            <Checkbox
              id="rigths"
              labelrigth="Jag godkänner allmänna villkoren."
              clickHandler={() => onValueChange('rigths', event.target.value)}
            />
            <div className="buttondiv">
              <Button
                className={`nextbutton ${isCreatingAccount ? 'grey' : ''}`}
                nature="default"
                stretch
                type="submit"
              >
                SKAPA KONTO
              </Button>
            </div>
          </div>
        )}
      </form>
    </StyledSignUpContainer>
  );
};

export default SignUp;
