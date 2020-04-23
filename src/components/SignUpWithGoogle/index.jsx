import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { updateUserProfileDocument } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import UploadFile from '../../components/UploadFile';

import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import isValidDate from '../../helpers/functions/validDate';
import makeStringtoBirthDate from '../../helpers/functions/makeStringtoBirthDate';

import { StyledContainer } from './style';

const SignUpWithGoogle = () => {
  const { user } = useContext(AuthenticationContext);
  const history = useHistory();
  const [msgName, setMsgName] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');
  const [msg, setMsg] = useState('');
  const [msglvl, setMsglvl] = useState('');
  const [toogle, setToogle] = useState(false);

  const toogleChangepic = e => {
    setToogle(!toogle);
  };

  const [inputs, setInputs] = useState({
    username: user.displayName || '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: ''
  });

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    }
    if (isValidDate(inputs.dateOfBirth) == 'Not valid date') {
      setMsgBirth('Fyll i det datum du är född.');
    }
    if (inputs.lvlOfSwedish.length <= 1) {
      setMsglvl('Klicka i någon av alternativen');
    }
    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    } else {
      try {
        updateUserProfileDocument(user.id, {
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
      <form onSubmit={onSubmit}>
        <H1>Skapa konto</H1>
        <p className="red">{msgName}</p>
        <Input
          type="text"
          autoComplete="name"
          label="Förnamn och efternamn *"
          id="username"
          inline
          name="username"
          placeholder="Namn Efternamn"
          value={inputs.username}
          onChange={event => onValueChange('username', event.target.value)}
        />

        <p className="red">{msgBirth}</p>
        <Input
          type="text"
          autoComplete="bday"
          label="Födelsedatum *"
          id="dateOfBirth"
          inline
          name="dateOfBirth"
          placeholder="ÅÅÅÅMMDD"
          value={inputs.dateOfBirth}
          onChange={event => onValueChange('dateOfBirth', event.target.value)}
        />
        <p className="red">{msglvl}</p>
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
        <p className="red">{msgGender}</p>
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
        <div className="profilebox-1">
          <img className="avatar" src={user.photoUrl} alt="avatar" />
          <span
            className="changepic"
            tabIndex="-5"
            role="button"
            aria-label="toogle"
            onClick={toogleChangepic}
            onKeyDown={toogleChangepic}
          >
            {toogle ? 'Klicka här efter laddat upp din nya bild' : 'Byt bild'}
          </span>
        </div>
        <p className="red"> {msg} </p>

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

export default SignUpWithGoogle;
