import React, { useState } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Button from '../UI/Button';
import H1 from '../UI/H1';
import Input from '../UI/Input';

import { StyledContainer } from './style';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
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

      await createUserProfileDocument(user, { displayName: inputs.username });
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
          label="Username"
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
          label="Email"
          id="email"
          inline
          name="email"
          placeholder="john.doe@gmail.com"
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
          placeholder="********"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <Input
          type="password"
          autoComplete="current-password"
          label="Confirm password"
          id="confirmPassword"
          inline
          name="confirmPassword"
          placeholder="********"
          value={inputs.confirmPassword}
          onChange={event => onValueChange('confirmPassword', event.target.value)}
        />
        <Button nature="default" stretch type="submit">
          SUBMIT
        </Button>
      </form>
    </StyledContainer>
  );
};

export default SignUp;
