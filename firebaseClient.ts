import * as firebaseClient from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  const CLIENT_CONFIG = {
    apiKey: "AIzaSyB1hzteIZjF3K726__bJwBaiPaZDwm_QxY",
    authDomain: "watcher-tube.firebaseapp.com",
    databaseURL: "https://watcher-tube.firebaseio.com",
    projectId: "watcher-tube",
    storageBucket: "watcher-tube.appspot.com",
    messagingSenderId: "302546742936",
    appId: "1:302546742936:web:4fab1d136375594d11aaed",
    measurementId: "G-N57MELFS3Y"
  };

  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient.auth().signInAnonymously()

  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
