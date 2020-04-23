import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import UploadFile from '../UploadFile';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import BackButton from '../UI/BackButton';
import isValidDate from '../../helpers/functions/validDate';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';

import { StyledContainer } from './style';

const SignUp = () => {
  const history = useHistory();
  const [msgName, setMsgName] = useState('');
  const [msgMail, setmsgMail] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgPassword, setPassword] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
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

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    }
    if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    }
    if (inputs.email.length <= 0) {
      setmsgMail('Fyll i mail');
    }
    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    }
    if (inputs.password !== inputs.confirmPassword) {
      setMsg('Dina lösenord matchar inte');
      return;
    }
    if (inputs.password.length < 6) {
      setMsg('Ditt Lösenord behöver vara minst 6 tecken.');
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
      setMsg('Fyll i fälten och försök igen');
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
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="reddott" />
          <Input
            type="name"
            autoComplete="name"
            label="Förnamn och efternamn *"
            id="username"
            inline
            name="username"
            placeholder="Namn Efternamn"
            value={inputs.username}
            onChange={event => onValueChange('username', event.target.value)}
          />
          <div className="redline" />
          <p className="red">{msgName}</p>
          <div className="reddott" />
          <Input
            type="email"
            autoComplete="email"
            label="E-Post *"
            id="email"
            inline
            name="email"
            placeholder="namn.efternamn@gmail.com"
            value={inputs.email}
            onChange={event => onValueChange('email', event.target.value)}
          />
          <div className="redline" />
          <p className="red">{msgMail}</p>
          <div className="reddott" />
          <Input
            type="string"
            autoComplete="bday"
            label="Födelsedatum *"
            id="dateOfBirth"
            inline
            name="dateOfBirth"
            placeholder="ÅÅÅÅMMDD"
            value={inputs.dateOfBirth}
            onChange={event => onValueChange('dateOfBirth', event.target.value)}
          />
          <div className="redline" />
          <p className="red">{msgBirth}</p>
          <div className="reddott" />
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
          <p className="red">{msgPassword}</p>
          <div className="reddott" />
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
          <p className="red">{msgPassword}</p>
          {/*     <div />
          <div />
          <Button nature="default" type="submit">
          Skapa konto
          </Button> */}
        </div>

        <div>
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
          <p className="red">{msgGender}</p>
          <p className="red">{msg}</p>
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
        </div>
        <p>* Obligatoriska fält</p>
        {toogle ? null : (
          <Button nature="default" stretch type="submit">
            Skapa konto
          </Button>
        )}
      </form>
      {toogle ? <UploadFile /> : null}
    </StyledContainer>
  );
};

export default SignUp;
