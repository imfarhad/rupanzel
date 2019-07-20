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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;