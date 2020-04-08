const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
};

exports.walkCreated = functions.firestore.document('walks/{walkId}').onCreate(doc => {
  const walk = doc.data();
  const notification = {
    content: 'Added a new walk',
    user: `${walk.user.id}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  };

  return createNotification(notification);
});
