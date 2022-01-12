import * as Firebase from 'firebase';
import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

console.log(process.env.REACT_APP_API_KEY);
// firebase config
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
	appId: process.env.REACT_APP_APP_ID
};

// initializing the firebase
export const app = App.initializeApp(firebaseConfig);

export const firebase = Firebase;
