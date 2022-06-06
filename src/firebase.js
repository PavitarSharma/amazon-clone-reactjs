import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDzftad08yttgaiqOTYclxQZm8Z1qRe4Gc",
  authDomain: "clone-89665.firebaseapp.com",
  projectId: "clone-89665",
  storageBucket: "clone-89665.appspot.com",
  messagingSenderId: "326553169994",
  appId: "1:326553169994:web:a31baec8507eab384bf6b3",
  measurementId: "G-JRW5TD46SV"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, db}




