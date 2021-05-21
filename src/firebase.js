import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";
import config from "./config";


firebase.initializeApp(config)

const auth = firebase.auth();
const db = firebase.firestore();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
 

 const socialMediaAuth = (provider) => {
     return firebase
     .auth()
     .signInWithPopup(provider)
     .then((res) => {
         return res.user;
     })
     .catch((err) => {
           return err;
     })
 };


export {auth, db, providerFacebook, providerGoogle, socialMediaAuth};