import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { signInWithGoogle, resetPassword } from '../../firebase/firebase.utils';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import Loader from 'react-loader-spinner';

import Input from '../UI/Input';
import Button from '../UI/Button';
import H1 from '../UI/H1';

import { StyledContainer } from './style';

const SignIn = () => {
  const { login } = useContext(AuthenticationContext);
  const [toogleForgotten, setToogleForgotten] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      setWrongEmailOrPassword(false);
      await login(inputs.email, inputs.password);
      setInputs({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
      setWrongEmailOrPassword(true);
      setLoading(false);
    }
  };

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const handlePasswordReset = e => {
    e.preventDefault();
    if (inputs.email.length > 5) {
      resetPassword(inputs.email);
      alert(
        `Ett mail med instruktioner för att återställa ditt lösenord är skickat till ${inputs.email}`
      );
      setToogleForgotten(false);
    }
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
            {!toogleForgotten ? (
              <>
                {wrongEmailOrPassword ? <span>Fel email eller lösenord</span> : null}
                <p>Glömt lösenord?</p>
              </>
            ) : null}
          </div>
        </div>
        {toogleForgotten ? (
          <div className="buttons">
            <Button type="submit" onClick={handlePasswordReset} stretch nature="default">
              ÅTERSTÄLL LÖSENORD
            </Button>
          </div>
        ) : (
          <div className="buttons">
            <Button className={`${loading ? 'gray' : ''}`} type="submit" stretch nature="default">
              {loading ? (
                <Loader
                  className="loader"
                  type="Oval"
                  color="rgba(242, 112, 99, 1)"
                  height={25}
                  width={25}
                />
              ) : (
                <span>LOGGA IN</span>
              )}
            </Button>
            {/* <p className="white or">eller</p>
            <Button
              nature="default"
              stretch
              onClick={signInWithGoogle}
              className="landingbutton google"
            >
              LOGGA IN MED GOOGLE
            </Button> */}
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
