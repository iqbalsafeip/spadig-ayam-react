import * as Firebase from 'firebase';
import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase config
const firebaseConfig = {
	apiKey: 'AIzaSyCP8rq9a_-H_liLw8TETbgeFuHBebkKVjM',
	authDomain: 'just-vote-it-v2.firebaseapp.com',
	projectId: 'just-vote-it-v2',
	storageBucket: 'just-vote-it-v2.appspot.com',
	messagingSenderId: '982167150909',
	appId: '1:982167150909:web:6057842cc56f064b0b6554'
};

// initializing the firebase
export const app = App.initializeApp(firebaseConfig);

export const firebase = Firebase;
