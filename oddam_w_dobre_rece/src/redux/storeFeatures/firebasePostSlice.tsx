import {createSlice} from "@reduxjs/toolkit";
import {addDoc, collection} from "firebase/firestore";
import {firestore} from "../../data/FireBaseConfig";

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
