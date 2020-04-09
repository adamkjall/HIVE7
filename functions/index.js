const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = (notification, userId) => {
  return admin
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
};

exports.walkJoined = functions.firestore.document('walks/{walkId}').onUpdate((change, context) => {
  const prevData = change.before.data();
  const newData = change.after.data();

  const hostingUserId = newData.user.id;
  let notification = {};

  if (prevData.attendingPeople.length < newData.attendingPeople.length) {
    const joinedUserId = newData.attendingPeople.pop();
    notification = {
      content: `Joined walk`,
      user: `${joinedUserId}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    // notify all usrs attending the walk
    newData.attendingPeople.forEach(id => createNotification(notification, id));
  } else if (prevData.attendingPeople.length > newData.attendingPeople.length) {
    const leftUserId = prevData.attendingPeople.find(id => !newData.attendingPeople.includes(id));
    notification = {
      content: `Left walk`,
      user: `${leftUserId}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    // notify all usrs attending the walk
    newData.attendingPeople.forEach(id => createNotification(notification, id));
  }

  return createNotification(notification, hostingUserId);
});
