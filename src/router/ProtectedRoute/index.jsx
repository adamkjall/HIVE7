import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

const ProtectedRoute = ({ redirectTo, ...props }) => {
  const context = useContext(AuthenticationContext);

  return context.isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: redirectTo,
        state: {
          from:
            // store to the last known route to redirect after login
            // unless that route is logout, in that case fallback to "/"
            props.location && props.location.pathname !== '/logout' ? props.location : '/'
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  location: PropTypes.object,
  redirectTo: PropTypes.string
};

ProtectedRoute.defaultProps = {
  redirectTo: '/login'
};

export default ProtectedRoute;
