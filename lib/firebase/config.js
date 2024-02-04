import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// all this data should be stored in a environment variable and should not be sent to the public 
const firebaseConfig = {
  apiKey: "AIzaSyCgAsW_FB3H_C_tWGi8yflUIORPOP8INX8",
  authDomain: "tanui-industries-a5043.firebaseapp.com",
  projectId: "tanui-industries-a5043",
  storageBucket: "tanui-industries-a5043.appspot.com",
  messagingSenderId: "370007198870",
  appId: "1:370007198870:web:b99763902e258c42fdc6b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)