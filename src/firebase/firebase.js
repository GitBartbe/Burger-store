import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvuwhBMHdYt5G0uYW7N9FXiorrN6rf95A",
  authDomain: "burgerstore-65ad6.firebaseapp.com",
  projectId: "burgerstore-65ad6",
  storageBucket: "burgerstore-65ad6.appspot.com",
  messagingSenderId: "1019274473591",
  appId: "1:1019274473591:web:d7aa33bff0c3d7ca541672",
};

const app = initializeApp(firebaseConfig);

//-------------------------------- authorisation with google provider --------------------

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//---------------------- create user in database if doesnt exist -------------------------

export const createUseDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef );

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};
