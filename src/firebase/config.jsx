import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDC1kXg_noyDyrp6ZP21D8BNs1eVCtptzY",
    authDomain: "olx-clone-974e0.firebaseapp.com",
    projectId: "olx-clone-974e0",
    storageBucket: "olx-clone-974e0.appspot.com",
    messagingSenderId: "607812402247",
    appId: "1:607812402247:web:c106b523cce2c5da6b0562",
    measurementId: "G-BCQHFSXGC4"
  };

  const Firebase = initializeApp(firebaseConfig);

  const Firestore = getFirestore(Firebase)
  const storage = getStorage(Firebase)
  const auth = getAuth(Firebase);
  
  
  export { auth, Firestore, storage };