import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBXxsPTMFP0NcEtDv_3XX8zd_T0fvAT3SI",
    authDomain: "chatgpt-395b9.firebaseapp.com",
    projectId: "chatgpt-395b9",
    storageBucket: "chatgpt-395b9.appspot.com",
    messagingSenderId: "881176477735",
    appId: "1:881176477735:web:0242b6b13b90993b72ce02"
  };

  const app=getApps().length?getApp():initializeApp(firebaseConfig)
  const db=getFirestore(app)

  export {db}