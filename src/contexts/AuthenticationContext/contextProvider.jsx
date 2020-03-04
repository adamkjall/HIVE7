import React, { useState } from 'react';

import { LocalStorage as Storage } from 'helpers/storage';
import AuthenticationContext from './context';

export const TOKEN_STORAGE_KEY = 'authentication.token';

/**
 * AuthenticationContextProvider
 *
 * Define authentication state, and persist required informations
 */
const AuthenticationContextProvider = props => {
  const [token, setToken] = useState(Storage.get(TOKEN_STORAGE_KEY));
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = parameters => {
    // NOTE: do not save sensitive data such as user personal informations in localStorage!
    Storage.set(TOKEN_STORAGE_KEY, parameters.token);

    setIsAuthenticated(true);
    setToken(parameters.token);
    setUser(Object.assign({}, parameters.user, user));
  };

  const logout = () => {
    Storage.remove(TOKEN_STORAGE_KEY);

    setIsAuthenticated(false);
    setToken(undefined);
    setUser(undefined);
  };

  return (
    <AuthenticationContext.Provider
      {...props}
      value={{
        // Make sure to implement everything defined in the context file
        isAuthenticated,
        login,
        logout,
        token,
        user
      }}
    />
  );
};

export default AuthenticationContextProvider;
