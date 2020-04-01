import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import SignUp from '../../components/SignUp';

import Page from 'compositions/Page';

import PropTypes from 'prop-types';

const SignUpView = ({ location }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    // If the user is already authenticated
    // Redirect to whichever page makes sense
    return <Redirect to={(location.state && location.state.from) || '/feed'} />;
  }

  return (
    <Page metadata={{ title: 'SignUp' }}>
      <SignUp />
    </Page>
  );
};

SignUpView.propTypes = {
  location: PropTypes.object
};

export default SignUpView;
