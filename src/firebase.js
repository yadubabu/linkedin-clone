import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBrprksdGwPHv11yY-NeE6JgORmSIcQDUE",
  authDomain: "linkedclone-1d308.firebaseapp.com",
  projectId: "linkedclone-1d308",
  storageBucket: "linkedclone-1d308.appspot.com",
  messagingSenderId: "743037783977",
  appId: "1:743037783977:web:7c11d1cb35637879ec7eb8"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;