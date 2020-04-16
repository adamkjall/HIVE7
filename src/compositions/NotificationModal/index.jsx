import React, { useState, useEffect } from 'react';

import { getUserData, getWalk } from '../../firebase/firebase.utils';

import Dialog from 'components/UI/Dialog';

const NotificationModal = ({ notification, removeNotification }) => {
  const [userData, setUserData] = useState({});
  const [walkData, setWalkData] = useState({});

  useEffect(() => {
    if (!notification) return;

    getUserData(notification.userId).then(data => setUserData(data));
    getWalk(notification.walkId).then(data => setWalkData(data));
  }, [notification]);

  console.log('userData', userData);
  console.log('walkData', walkData);

  return (
    <Dialog
      closeButtonLabel="Close"
      onClose={() => removeNotification(notification.notificationId)}
    >
      {notification.type === 'left walk' ? (
        <h1>{`${userData.displayName} har gett återbud på din promenad.`}</h1>
      ) : (
        <h1>{`${userData.displayName} vill gå med dig på din promenad.`}</h1>
      )}
      <p>{`Tid: ${walkData.time}`}</p>
      <p>{`Datum: ${walkData.date}`}</p>
      <p>{`Plats: ${walkData.where}`}</p>
    </Dialog>
  );
};

export default NotificationModal;
