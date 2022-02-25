// Import Firebase Library
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCvV7r9LtWRGgrAll5LPF3wV4G8m61Yfuw",
    authDomain: "crwn-bd-31549.firebaseapp.com",
    projectId: "crwn-bd-31549",
    storageBucket: "crwn-bd-31549.appspot.com",
    messagingSenderId: "1058389634393",
    appId: "1:1058389634393:web:b496beb2d1a6ac9c093048",
    measurementId: "G-LVDNK1322Q"
}

// Start firebase project
firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = new firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;