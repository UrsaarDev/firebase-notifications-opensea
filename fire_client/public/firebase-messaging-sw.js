// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyA2p5exbjmgFsPASikCJM6RVzBTzriMyZI",
  authDomain: "familyversebsc.firebaseapp.com",
  projectId: "familyversebsc",
  storageBucket: "familyversebsc.appspot.com",
  messagingSenderId: "461726120876",
  appId: "1:461726120876:web:37cf1385e044788cb49809"
}

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
