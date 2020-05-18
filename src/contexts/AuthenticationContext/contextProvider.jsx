import React, { useState, useEffect } from 'react';

//import { LocalStorage as Storage } from 'helpers/storage';
import AuthenticationContext from './context';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export const TOKEN_STORAGE_KEY = 'authentication.token';

/**
 * AuthenticationContextProvider
 *
 * Define authentication state, and persist required informations
 */
const AuthenticationContextProvider = props => {
  //const [token, setToken] = useState(Storage.get(TOKEN_STORAGE_KEY));
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          setIsAuthenticated(true);
        });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error while sign in', error.message);
    }
  };

  const logout = () => {
    auth.signOut();

    setIsAuthenticated(false);
    setUser(undefined);
  };

  return (
    <AuthenticationContext.Provider
      {...props}
      value={{
        isAuthenticated,
        login,
        logout,
        user
      }}
    />
  );
};

export default AuthenticationContextProvider;
