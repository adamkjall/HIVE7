import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, updateUserProfileDocument } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Button from '../UI/Button';
import H3 from '../UI/H3';
import Input from '../UI/Input';
import BackButton from '../UI/BackButton';
import { StyledContainer } from './style';

const SignUpWithGoogle = () => {
  const { user } = useContext(AuthenticationContext);
  const history = useHistory();
  const [msgName, setMsgName] = useState('');
  const [msgGender, setGender] = useState('');
  const [msgBirth, setMsgBirth] = useState('');

  const [inputs, setInputs] = useState({
    username: '',
    dateOfBirth: '',
    lvlOfSwedish: '',
    gender: ''
  });

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.username.length <= 1) {
      setMsgName('Fyll i Ditt namn.');
    }
    if (inputs.dateOfBirth.length != 8 || inputs.dateOfBirth > 20200202) {
      setMsgBirth('Fyll i det datum du är född.');
    }
    if (inputs.gender.length < 1) {
      setGender('Var vänlig fyll kön.');
    }

    try {
      updateUserProfileDocument(user.id, inputs);
      history.push('/feed');
    } catch (error) {
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
      <BackButton />
      <form onSubmit={onSubmit}>
        <H3>Skapa konto</H3>
        <Input
          type="text"
          autoComplete="username"
          label="Förnamn och efternamn *"
          id="username"
          inline
          name="username"
          placeholder="Namn Efternamn"
          value={inputs.username}
          onChange={event => onValueChange('username', event.target.value)}
        />
        <p className="red">{msgName}</p>
        <Input
          type="number"
          autoComplete="dateOfBirth"
          label="Födelsedatum *"
          id="dateOfBirth"
          inline
          name="dateOfBirth"
          placeholder="ÅÅÅÅMMDD"
          value={inputs.dateOfBirth}
          onChange={event => onValueChange('dateOfBirth', event.target.value)}
        />
        <p className="red">{msgBirth}</p>
        <div className="swedish">
          <p>Är du ny eller etablerad? *</p>
          <label htmlFor="newSwede">
            <input
              type="radio"
              id="newSwede"
              name="swedelvl"
              value="newSwede"
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
              value="establishSwede"
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

        <p>* Obligatoriska fält</p>
        <Button nature="default" stretch type="submit">
          Skapa konto
        </Button>
      </form>
    </StyledContainer>
  );
};

export default SignUpWithGoogle;
