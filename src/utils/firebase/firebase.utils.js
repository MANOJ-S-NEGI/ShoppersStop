import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, getDocs, query, collection } from  "firebase/firestore" //writeBatch

//const dotenv = require('dotenv');
//dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyDSB9qqwG5Fq_S9ytrut8_LMZOe4uIyTj4",//process.env.REACT_APP_FIREBASE_API_KEY ,//
  authDomain: "crwn-clothing-db-ac7bd.firebaseapp.com",
  projectId: "crwn-clothing-db-ac7bd",
  storageBucket: "crwn-clothing-db-ac7bd.appspot.com",
  messagingSenderId: "620534833483",
  appId: "1:620534833483:web:4bf2de48d2b5eaf248c8ce",
  measurementId: "G-H4TDWWSC7M"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
     signInWithPopup(auth, googleProvider);

export const SignInWithRedirect = () =>
    signInWithRedirect(auth, googleProvider);


export const db = getFirestore();



export const createAuthUserWithEmailAndPassword = async (email, password)=> {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password)=> {
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const OnAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth,callback);
};

/*
// feed and data Storing into DB
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    // Iterate over the array of objects
    objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Data Stored into Database");
};
*/

// Retrive Data from data base:
export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db, 'product-category'); //collection name product-categories 
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
  }, {});

  return categoryMap;
};


export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return; 
    const userDocumentRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocumentRef);
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocumentRef,{
                displayName, email, createdAt: createdAt.toISOString(), ...additionalInfo,
            });

        }catch (error){
            console.log(error.message);  
        }
    }
    return userSnapshot;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
        },
        reject
      );
    });
  };
