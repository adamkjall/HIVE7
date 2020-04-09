// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  messagingSenderId: '352967461305'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener('notificationclick', event => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});

messaging.setBackgroundMessageHandler(payload => {
  console.log('Recieved background message', payload);

  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
    // icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
// importScripts('https://ocdn.eu/weather/pwa/workbox-sw.prod.v1.0.0.js');

// const cacheName = 'articles-cache';

// //Firebase initialization
// firebase.initializeApp({
//   messagingSenderId: '827348818915'
// });
// const messaging = firebase.messaging();

// //register background message handler
// messaging.setBackgroundMessageHandler(payload => {
//   console.log('Recieved background payload: ', payload);
// });

// //open notification link after click on system notification
// self.addEventListener('notificationclick', function(event) {
//   event.notification.close();
//   event.waitUntil(self.clients.openWindow(event.notification.data.click_action));
// });

// //configure workbox to serve content using the same cache as backgroundNotificationHandler
// const workboxSW = new WorkboxSW();
// workboxSW.router.registerRoute(
//   /.*/,
//   workboxSW.strategies.networkFirst({
//     cacheName: cacheName,
//     cacheExpiration: {
//       maxEntries: 50,
//       maxAgeSeconds: 2 * 24 * 60 * 60,
//       networkTimeoutSeconds: 8
//     }
//   })
// );

// self.addEventListener('install', e => self.skipWaiting());
// self.addEventListener('activate', () => self.clients.claim());
