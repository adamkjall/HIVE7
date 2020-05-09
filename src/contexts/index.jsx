import React from 'react';
import PropTypes from 'prop-types';

import { LegalContextProvider } from './LegalContext';
import { AuthenticationContextProvider } from './AuthenticationContext';
import { NotificationContextProvider } from './NotificationContext';
import { NavContextProvider } from './NavContext';

/**
 * Implement all the different context providers here, they will be wrap the application
 * You can add as many as you need
 */
const ApplicationContextProvider = ({ children }) => (
  <LegalContextProvider>
    <AuthenticationContextProvider>
      <NavContextProvider>
        <NotificationContextProvider>{children}</NotificationContextProvider>
      </NavContextProvider>
    </AuthenticationContextProvider>
  </LegalContextProvider>
);

ApplicationContextProvider.propTypes = {
  children: PropTypes.node
};

export default ApplicationContextProvider;
