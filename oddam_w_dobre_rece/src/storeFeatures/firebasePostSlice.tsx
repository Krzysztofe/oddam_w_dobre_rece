import {createSlice} from "@reduxjs/toolkit";
import {addDoc, collection} from "firebase/firestore";
import {auth, firestore} from "../components/libraries/FireBaseConfig";
import {useAuthState} from "react-firebase-hooks/auth";

// const [user, loading, error] = useAuthState(auth);
const summaryReference = collection(firestore, 'summary')

const firebasePostSlice = createSlice({
    name: 'firebasePost',
    initialState: {
        selectStuff: "",
        selectBags: "",
        localisation: "",
        dzieciom: "",
        matkom: "",
        bezdomnym: "",
        niepelnosprawnym: "",
        starszym: "",
        organisationName: "",
        street: "",
        city: "",
        postCode: "",
        phone: "",
        date: "",
        time: "",
        note: "",
        uid: ""
    },
    reducers: {
        createPost: (state, action) =>{
            addDoc(summaryReference, action.payload).then(ref => console.log(ref))
        }
    }
})


export const {createPost} = firebasePostSlice.actions
export default firebasePostSlice.reducer
