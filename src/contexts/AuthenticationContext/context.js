import React from 'react';

export default React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  //token: undefined,
  user: undefined
});
