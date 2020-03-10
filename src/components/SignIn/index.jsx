import React, { useState, useContext } from 'react';

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
      <H1>Login</H1>
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
          label="Password"
          id="password"
          inline
          name="password"
          placeholder="somethingsomething"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <Button nature="default" stretch type="submit">
          SIGN IN WITH EMAIL AND PASSWORD
        </Button>
        <Button nature="primary" stretch onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </Button>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
