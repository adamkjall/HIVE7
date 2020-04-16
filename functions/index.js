const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = (notification, userId) => {
  const docRef = admin
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('notifications')
    .doc();

  docRef
    .set({ ...notification, notificationId: docRef.id })
    .then(doc => console.log('notification added', doc))
    .catch(error => console.log('Error creating notification', error));
};

exports.walkJoined = functions.firestore.document('walks/{walkId}').onUpdate((change, context) => {
  const prevData = change.before.data();
  const newData = change.after.data();

  const hostingUserId = newData.user.id;
  let notification = {};

  if (prevData.attendingPeople.length < newData.attendingPeople.length) {
    const joinedUserId = newData.attendingPeople.pop();
    notification = {
      type: `joined walk`,
      walkId: `${newData.walkId}`,
      userId: `${joinedUserId}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    // // notify all users attending the walk
    // newData.attendingPeople.forEach(id => createNotification(notification, id));
  } else if (prevData.attendingPeople.length > newData.attendingPeople.length) {
    const leftUserId = prevData.attendingPeople.find(id => !newData.attendingPeople.includes(id));
    notification = {
      type: `left walk`,
      walkId: `${newData.walkId}`,
      userId: `${leftUserId}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    // notify all users attending the walk
    // newData.attendingPeople.forEach(id => createNotification(notification, id));
  }

  return createNotification(notification, hostingUserId);
});
