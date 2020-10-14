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

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);


/** Using promise base auth with SAGA*/
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

/** */
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
export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef)
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const converCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    // console.log(doc.data());
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // transform array to object
  // return transformedCollection.reduce((acc, category) => {
  //   acc[category.title.toLowerCase()] = category;
  //   return acc;
  // }, {});
  return transformedCollection
    .map((category) => {
      return { [category.title.toLowerCase()]: category };
    })
    .reduce((a, b) => {
      return { ...a, ...b };
    }, {});
};
export default firebase;
