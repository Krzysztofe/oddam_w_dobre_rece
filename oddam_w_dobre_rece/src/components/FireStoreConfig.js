// import firebase from 'firebase'
// import 'firebase/firestore'
//
// const firebaseConfig = {
//     apiKey: "AIzaSyBeClzvAKAMoSUTYuImhWDjYWavBd0dKYo",
//     authDomain: "data-base-cl.firebaseapp.com",
//     projectId: "data-base-cl",
//     storageBucket: "data-base-cl.appspot.com",
//     messagingSenderId: "462606165431",
//     appId: "1:462606165431:web:66b2cfaf4564e4a71cf432"
// };
//
// firebase.initializeApp(firebaseConfig)
//
// export default firebase

// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'
//
//
// const firebaseConfig = {
//     apiKey: "AIzaSyBeClzvAKAMoSUTYuImhWDjYWavBd0dKYo",
//     authDomain: "data-base-cl.firebaseapp.com",
//     projectId: "data-base-cl",
//     storageBucket: "data-base-cl.appspot.com",
//     messagingSenderId: "462606165431",
//     appId: "1:462606165431:web:66b2cfaf4564e4a71cf432"
// };
//
//
// const app = initializeApp(firebaseConfig);
//
// const db = getFirestore(app)
//
// export {db}




// useEffect(()=>{
//     getDocs(summaryReference)
//         .then((data)=>{
//             setSummary(data.docs.map((doc) => (
//                         {...doc.data(), id: doc.id})))
//             console.log(data)
//         })
//         .catch(error => alert(error.code))
//
// }, [])