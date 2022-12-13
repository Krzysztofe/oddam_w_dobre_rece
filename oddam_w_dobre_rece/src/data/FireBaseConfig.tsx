import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId:  process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};
// REACT_APP_apiKey = "AIzaSyAfgq4E10mlJix8lPe6Jvfye2FTedHa0QU"
// REACT_APP_authDomain = "authentication-cl.firebaseapp.com"
// REACT_APP_projectId = "authentication-cl"
// REACT_APP_storageBucket = "authentication-cl.appspot.com"
// REACT_APP_messagingSenderId = "782250818177"
// REACT_APP_appId = "1:782250818177:web:2a7a5ef2b603b9fbc7ab80"
// REACT_APP_measurementId = "G-VXD7D7151F"

// apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//     measurementId: process.env.REACT_APP_measurementId,


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

