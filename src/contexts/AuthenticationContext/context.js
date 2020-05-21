import React from 'react';

export default React.createContext({
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  //token: undefined,
  user: undefined,
  deleteAccount: async () => {}
});
