import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import Page from 'compositions/Page';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';

const LoginView = ({ location }) => {
  const { isAuthenticated, login } = useContext(AuthenticationContext);
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });


  if (isAuthenticated) {
    // If the user is already authenticated
    // Redirect to whichever page makes sense
    return <Redirect to={(location.state && location.state.from) || '/'} />;
  }

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(inputs.username, inputs.password);
      setInputs({
        username: '',
        password: ''
      });
    } catch (error) {
      console.log('Error while sign in', error.message);
    }
    // You probably wish to implement some actions with the form values here :)
    // login({
    //   user: {
    //     username: inputs.username
    //   },
    //   token: 'a-fake-token-because-there-is-no-backend-to-call'
    // });
  };

  return (
    <Page metadata={{ title: 'Login' }}>
      <H1>Login</H1>
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
          SIGN IN WITH EMAIL
        </Button>
        <Button nature="primary" stretch onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </Button>
      </form>
    </Page>
  );
};

LoginView.propTypes = {
  location: PropTypes.object
};

export default LoginView;
