import React from 'react';

import NotificationContext from './context';

import useNotifications from 'hooks/useNotifications';

const NotificationContextProvider = props => {
  const [notifications, removeNotification] = useNotifications();

  return <NotificationContext.Provider {...props} value={{ notifications, removeNotification }} />;
};

export default NotificationContextProvider;
