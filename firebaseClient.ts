import * as firebaseClient from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  const CLIENT_CONFIG = {

  };

  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient.auth().signInAnonymously()

  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
