import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import UploadFile from '../UploadFile';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import BackButton from '../BackButton';
import isValidDate from '../../helpers/functions/validDate';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';
import waves from '../../assets/icons/waves.svg';
import graywaves from '../../assets/icons/graywaves.svg';

import { StyledContainer } from './style';

const SignUp = () => {
  const history = useHistory();
  const [nextquestionens, setNextQuestions] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgMail, setmsgMail] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msglvl, setMsglvl] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [msg, setMsg] = useState('');

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [toogle, setToogle] = useState(false);
  const toogleChangepic = e => {
    setToogle(!toogle);
  };

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
    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    } else if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
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

    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    }
    if (inputs.lvlOfSwedish < 1) {
      setMsglvl('Var vänlig klicka i ett alternativ');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      await createUserProfileDocument(user, {
        displayName: inputs.username,
        dateOfBirth: makeStringtoBirthDate(inputs.dateOfBirth),
        lvlOfSwedish: inputs.lvlOfSwedish,
        gender: inputs.gender
      });
      history.push('/feed');
    } catch (error) {
      setMsg('Något gick fel. Fyll i fälten och försök igen');
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
    <StyledContainer>
      <div className="headcontainer">
        <BackButton />
        <H1>Skapa konto</H1>
      </div>
      <img src={waves} className="waves green" alt="wave" />
      <img src={graywaves} className="waves gray" alt="wave" />
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
              <Button className="nextbutton" stretch onClick={onNext}>
                Nästa
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <H1 className="h1-in-center">2/2</H1>
            <div className="signup-form-container2">
              {inputs.lvlOfSwedish.length <= 1 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <div className="swedish">
                <p>Är du ny eller etablerad? *</p>
                <label htmlFor="newSwede">
                  <input
                    type="radio"
                    id="newSwede"
                    name="swedelvl"
                    value="Ny Svensk"
                    onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
                  />
                  Ny svensk - jag vill bli bättre på svenska
                </label>
                <br />
                <label htmlFor="establish">
                  <input
                    type="radio"
                    id="establish"
                    name="swedelvl"
                    value="Etablerad svensk"
                    onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
                  />
                  Etablerad svensk - jag pratar flytande svenska.
                </label>
              </div>
              <div className="redline2" />
              <p className="redlvl">{msglvl}</p>
              {inputs.gender.length <= 0 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              <div className="gender">
                <p>Kön? *</p>
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
                  Annat / vill inte svara
                </label>
              </div>
              <div className="redline2" />
              <p className="red">{msgGender}</p>
              {inputs.email.length <= 4 ? (
                <div className="reddott" />
              ) : (
                <div className="donedott" />
              )}
              {/* funkar inte då man inte har ett id förren skapa knappen. */}
              <div className="profilebox-1">
                <span
                  className="changepic"
                  tabIndex="-5"
                  role="button"
                  aria-label="toogle"
                  onClick={toogleChangepic}
                  onKeyDown={toogleChangepic}
                >
                  {toogle ? 'Klicka här efter laddat upp din nya bild' : 'Lägg till en bild'}
                </span>
              </div>
              <div /> <p className="red">{msg}</p>
              <div />
              {toogle ? null : (
                <Button nature="default" stretch type="submit">
                  Skapa konto
                </Button>
              )}
            </div>
          </div>
        )}
      </form>

      {toogle ? <UploadFile /> : null}
    </StyledContainer>
  );
};

export default SignUp;
