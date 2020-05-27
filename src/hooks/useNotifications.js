import { useState, useEffect, useContext } from 'react';

import { firestore } from '../firebase/firebase.utils';
import { AuthenticationContext } from '../contexts/AuthenticationContext';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthenticationContext);

  // Syncs notifications state with the current users
  // notifications colletion on firebase
  useEffect(() => {
    if (!user) return;

    const unsubscribe = firestore
      .collection(`users/${user.id}/notifications`)
      .onSnapshot(querySnapshot => {
        const fetchedNotifications = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          fetchedNotifications.push({
            ...data
          });
        });

        const sortedNotifications = fetchedNotifications.sort(
          (a, b) => a.time.toDate() - b.time.toDate()
        );
        setNotifications(sortedNotifications);
      });

    return () => unsubscribe();
  }, [user]);

  const removeNotification = async notificationId => {
    const updatedNotifications = notifications.filter(
      noti => noti.notificationId !== notificationId
    );
    setNotifications(updatedNotifications);
    firestore
      .collection(`users/${user.id}/notifications`)
      .doc(notificationId)
      .delete()
      .catch(error => console.log('Error while deleting notification', error));
  };

  return [notifications, removeNotification];
};

export default useNotifications;
