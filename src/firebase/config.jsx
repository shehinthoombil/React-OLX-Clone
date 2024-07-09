import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCRQ9J2pVHqo1E9555S7B96WMkujx1B_sI",
  authDomain: "olx-clone-57420.firebaseapp.com",
  projectId: "olx-clone-57420",
  storageBucket: "olx-clone-57420.appspot.com",
  messagingSenderId: "719829514888",
  appId: "1:719829514888:web:1bc63f4f33dad4b61fbd3d",
  measurementId: "G-ZY2P4DDB5C"
};

const Firebase = initializeApp(firebaseConfig);

const firestore = getFirestore(Firebase)
const storage = getStorage(Firebase)
const auth = getAuth(Firebase);


export { auth, firestore, storage };