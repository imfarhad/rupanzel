import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBb4mLhOjlL3xzkiftXDjBTTwNdm3TpF5M",
    authDomain: "rupanzel-db.firebaseapp.com",
    databaseURL: "https://rupanzel-db.firebaseio.com",
    projectId: "rupanzel-db",
    storageBucket: "",
    messagingSenderId: "537086165844",
    appId: "1:537086165844:web:9072304975b61ba2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;