import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Input from '../UI/Input';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import { StyledContainer } from './style';

const SignIn = () => {
  const { login } = useContext(AuthenticationContext);
  const [toogleForgotten, setToogleForgotten] = useState(false);
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
      <H1>Välkommen tillbaka!</H1>
      <form onSubmit={onSubmit} className="form-in-middle">
        <div className="input-in-middle">
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
          {toogleForgotten ? null : (
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
          )}
          <div className="forgotten" onClick={() => setToogleForgotten(!toogleForgotten)}>
            <p>Glömt lösenord</p>
          </div>
        </div>
        {toogleForgotten ? (
          <div className="buttons">
            <Button
              type="submit"
              onClick={() => {
                resetPassword(user.email);
                alert(
                  `Ett mail med instruktioner för att återställa ditt lösenord är skickat till ${user.email}`
                );
              }}
              stretch
              nature="default"
            >
              ÅTERSTÄLL LÖSENORD
            </Button>
          </div>
        ) : (
          <div className="buttons">
            <Button type="submit" stretch nature="default">
              LOGGA IN
            </Button>
            <p className="white or">eller</p>
            <Button
              nature="default"
              stretch
              onClick={signInWithGoogle}
              className="landingbutton google"
            >
              LOGGA IN MED GOOGLE
            </Button>
            <Link to="/signup">
              <p className="white link">
                Har du inget konto? <span>Skapa konto</span>
              </p>
            </Link>
          </div>
        )}
      </form>
    </StyledContainer>
  );
};

export default SignIn;
