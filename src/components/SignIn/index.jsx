import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import Input from '../UI/Input';
import Button from '../UI/Button';
import H1 from '../UI/H1';

import { StyledContainer } from './style';

const SignIn = () => {
  const { login } = useContext(AuthenticationContext);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const onSubmit = event => {
    event.preventDefault();

    login(inputs.email, inputs.password);

    setInputs({
      email: '',
      password: ''
    });
  };

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  return (
    <StyledContainer>
      <H1>Framåt!</H1>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          autoComplete="email"
          label="Email"
          id="email"
          inline
          name="email"
          placeholder="john.doe"
          value={inputs.email}
          onChange={event => onValueChange('email', event.target.value)}
        />
        <Input
          type="password"
          autoComplete="current-password"
          label="Lösenord"
          id="password"
          inline
          name="password"
          placeholder="lösenord"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <div className="buttons">
          <Link to="/">
            <Button nature="default">Skapa konto</Button>
          </Link>{' '}
          <Button nature="primary" onClick={signInWithGoogle}>
            Logga in med Google
          </Button>
          <Button nature="default" type="submit">
            Logga in
          </Button>
        </div>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
