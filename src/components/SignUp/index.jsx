import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';
import Select from '../UI/Select';

import { StyledContainer } from './style';

const SignUp = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    lvlOfSwedish: 'Pratar ingen svenska',
    password: '',
    confirmPassword: ''
  });

  const onSubmit = async event => {
    event.preventDefault();

    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      await createUserProfileDocument(user, {
        displayName: inputs.username,
        dateOfBirth: inputs.dateOfBirth,
        lvlOfSwedish: inputs.lvlOfSwedish
      });
      alert('Kontot är skapat');
      history.push('/landing');
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
      <H1>Register</H1>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="username"
          label="Namn"
          id="username"
          inline
          name="username"
          placeholder="john.doe"
          value={inputs.username}
          onChange={event => onValueChange('username', event.target.value)}
        />
        <Input
          type="email"
          autoComplete="email"
          label="E-Post"
          id="email"
          inline
          name="email"
          placeholder="john.doe@gmail.com"
          value={inputs.email}
          onChange={event => onValueChange('email', event.target.value)}
        />
        <Input
          type="date"
          autoComplete="dateOfBirth"
          label="Födelsedatum"
          id="dateOfBirth"
          inline
          name="dateOfBirth"
          placeholder=""
          value={inputs.dateOfBirth}
          onChange={event => onValueChange('dateOfBirth', event.target.value)}
        />
        <Select
          id="lvlOfSwedish"
          name="lvlOfSwedish"
          label="Svenska nivå"
          value={inputs.lvlOfSwedish}
          onChange={event => onValueChange('lvlOfSwedish', event.target.value)}
        >
          <option value="Pratar ingen svenska">Pratar ingen svenska</option>
          <option value="Pratar lite svenska">Pratar lite svenska</option>
          <option value="Pratar bra svenska">Pratar bra svenska</option>
          <option value="Pratar flytande svenska">Pratar flytande svenska</option>
        </Select>
        <Input
          type="password"
          autoComplete="current-password"
          label="Lösenord"
          id="password"
          inline
          name="password"
          placeholder="********"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <Input
          type="password"
          autoComplete="current-password"
          label="Lösenord igen"
          id="confirmPassword"
          inline
          name="confirmPassword"
          placeholder="********"
          value={inputs.confirmPassword}
          onChange={event => onValueChange('confirmPassword', event.target.value)}
        />
        <Button nature="default" stretch type="submit">
          Skapa konto
        </Button>
      </form>
    </StyledContainer>
  );
};

export default SignUp;
