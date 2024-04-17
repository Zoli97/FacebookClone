import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBun8D_DWiP3DUPdxXpU6jA0Nf8RP_DtFo",
  authDomain: "facebook-clone-151f2.firebaseapp.com",
  projectId: "facebook-clone-151f2",
  storageBucket: "facebook-clone-151f2.appspot.com",
  messagingSenderId: "127945075537",
  appId: "1:127945075537:web:6f15e08a44637162840170",
  measurementId: "G-V67L4MXYC5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//access the db
const db = firebaseApp.firestore();
const authentication = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//explicit
export { authentication, provider };
export default db;
