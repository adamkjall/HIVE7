import React, { useState, useContext } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Input from '../UI/Input';
import Button from '../UI/Button';

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
      <form onSubmit={onSubmit} className="form-in-middle">
        <div className="input-in-middle">
          <Input
            type="email"
            autoComplete="email"
            label="E-post"
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
        </div>
        <div className="buttons">
          <Button type="submit" stretch nature="default">
            LOGGA IN
          </Button>
        </div>
      </form>
      <div className="buttons">
        <Button nature="default" stretch onClick={signInWithGoogle} className="landingbutton">
          LOGGA IN MED GOOGLE
        </Button>
      </div>
    </StyledContainer>
  );
};

export default SignIn;
