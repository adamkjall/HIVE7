import React, { useState, useContext } from 'react';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Input from '../UI/Input';
import Button from '../UI/Button';
import H3 from '../UI/H3';

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
      <form onSubmit={onSubmit}>
        <H3>Logga in</H3>
        <Input
          type="email"
          autoComplete="email"
          label="Email"
          id="email"
          inline
          name="email"
          placeholder="förnamn.efternamn@mail.com"
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
          placeholder="Lösenord"
          value={inputs.password}
          onChange={event => onValueChange('password', event.target.value)}
        />
        <div className="buttons">
          <Button type="submit" nature="default">
            Logga in
          </Button>
        </div>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
