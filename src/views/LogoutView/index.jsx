import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

const LogoutView = ({ redirectTo }) => {
  const { isAuthenticated, logout } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isAuthenticated) {
      // If the user is already authenticated
      // Redirect to whichever page makes sense
      logout();
    }
  });

  return <Redirect to={redirectTo} />;
};

LogoutView.propTypes = {
  redirectTo: PropTypes.string
};

LogoutView.defaultProps = {
  redirectTo: '/'
};

export default LogoutView;
