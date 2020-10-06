import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBw7zyaZCQZdi3g36SNSuGcHnvQkf4LRlQ",
  authDomain: "crown-ecom-react.firebaseapp.com",
  databaseURL: "https://crown-ecom-react.firebaseio.com",
  projectId: "crown-ecom-react",
  storageBucket: "crown-ecom-react.appspot.com",
  messagingSenderId: "571333343916",
  appId: "1:571333343916:web:458e3bb9c4c733b23dfd09",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//store user in firestore
export const createUserProfileDocument = async (userAuth, additionData) => {
  //if there is not user return
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userAuth)
  const snapShot = await userRef.get();
  //if there is not such user in DB save it
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;   
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userRef;
};
export default firebase;
