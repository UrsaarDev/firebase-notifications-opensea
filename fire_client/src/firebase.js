import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyA2p5exbjmgFsPASikCJM6RVzBTzriMyZI",
  authDomain: "familyversebsc.firebaseapp.com",
  projectId: "familyversebsc",
  storageBucket: "familyversebsc.appspot.com",
  messagingSenderId: "461726120876",
  appId: "1:461726120876:web:37cf1385e044788cb49809"
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({ vapidKey: 'BOIyyvQxze2-ySaioSMRlGekm9N3XsvIPB11DviR5gSdZvVTfhDKoKRo2LAWnHQgfaMpZ82_QYGi4Ff5KEbYXvo' }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });