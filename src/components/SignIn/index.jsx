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
        <div />
        <div className="input-in-middle">
          {inputs.email.length <= 4 ? <div className="reddott" /> : <div className="donedott" />}
          <Input
            type="email"
            autoComplete="email"
            label="E-post"
            id="email"
            inline
            name="email"
            value={inputs.email}
            onChange={event => onValueChange('email', event.target.value)}
          />
          <div className="redline" />
          <div />
          {inputs.password.length <= 5 ? <div className="reddott" /> : <div className="donedott" />}
          <Input
            type="password"
            autoComplete="current-password"
            label="Lösenord"
            id="password"
            inline
            name="password"
            value={inputs.password}
            onChange={event => onValueChange('password', event.target.value)}
          />
        </div>

        {/*         <button
          className="change"
          onClick={() => {
            resetPassword(user.email);
            alert(
              `Ett mail med instruktioner för att återställa ditt lösenord är skickat till ${user.email}`
            );
          }}
        > 

          Återställ lösenord
        </button>*/}
        <div className="buttons">
          <Button type="submit" stretch nature="default">
            LOGGA IN MEd E-POST
          </Button>
          <Button nature="default" stretch onClick={signInWithGoogle} className="landingbutton">
            LOGGA IN MED GOOGLE
          </Button>
        </div>
      </form>
    </StyledContainer>
  );
};

export default SignIn;
