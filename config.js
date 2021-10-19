import * as firebase from "firebase"
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyAdndyIZUSC8NTwYv3JyfhsQSURnGYUsec",
  authDomain: "wilyapp-4bb73.firebaseapp.com",
  projectId: "wilyapp-4bb73",
  storageBucket: "wilyapp-4bb73.appspot.com",
  messagingSenderId: "965759095555",
  appId: "1:965759095555:web:ad510b31b515b608050f36"
};

// Initialize Firebase
if(!firebase.apps.length){
const app = firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();