import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAobHVBNVf2LQzTziRWdfaZPu3k5aT0dyk',
	authDomain: 'ront-chat-nees.firebaseapp.com',
	projectId: 'ront-chat-nees',
	storageBucket: 'ront-chat-nees.appspot.com',
	messagingSenderId: '767830500782',
	appId: '1:767830500782:web:94e386c409132bdf62543f',
	measurementId: 'G-KCL4DMLJNL',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
