import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from 'contexts/AuthenticationContext';

import SignUp from '../../components/SignUp';
import SignUpWithGoogle from '../../components/SignUpWithGoogle';
import Header from '../../components/UI/Header';
import Page from 'compositions/Page';

import PropTypes from 'prop-types';

const SignUpView = ({ location }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { isAuthenticated, user } = useContext(AuthenticationContext);

  if (user) {
    if (!user.dateOfBirth || !user.gender || !user.lvlOfSwedish) {
      return <SignUpWithGoogle setIsSignedUp={setIsSignedUp} />;
    }
    // If the user is already authenticated
    // Redirect to whichever page makes sense
    else if (isAuthenticated && isSignedUp) {
      return <Redirect to={(location.state && location.state.from) || '/feed'} />;
    }
  }

  return (
    <Page metadata={{ title: 'Skapa profil' }}>
      <Header headline="Skapa profil" backbutton />
      <SignUp setIsSignedUp={setIsSignedUp} />
    </Page>
  );
};

SignUpView.propTypes = {
  location: PropTypes.object
};

export default SignUpView;
