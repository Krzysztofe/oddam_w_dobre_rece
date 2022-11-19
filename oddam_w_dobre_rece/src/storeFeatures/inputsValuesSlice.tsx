import {createSlice} from "@reduxjs/toolkit";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "../components/libraries/FireBaseConfig";
import {addDoc, collection} from "firebase/firestore";


export const inputsValuesSlice = createSlice({
    name: 'inputsValues',
    initialState: {
        value: {
            selectStuff: "", selectBags: "-- Wybierz --",
            selectLocalisation: "-- Wybierz --", dzieciom: false,
            matkom: false, bezdomnym: false,
            niepelnosprawnym: false, starszym: false,
            organisationName: "", street: "",
            city: "", postCode: "", phone: "",
            date: "", time: "", note: "", uid: ""
        }
    },
    reducers: {
        inputsValuesChange: (state, action) => {
            state.value = action.payload
        }

    }
})

// const [user, loading, error] = useAuthState(auth);
// const summaryReference = collection(firestore, 'summary')
//
// const createSummary = async (): Promise <void> => {
//     await addDoc(summaryReference, {
//         selectStuff: inputsValue.selectStuff,
//         selectBags: inputsValue.selectBags,
//         localisation: inputsValue.selectLocalisation,
//         dzieciom: inputsValue.dzieciom,
//         matkom: inputsValue.matkom,
//         bezdomnym: inputsValue.bezdomnym,
//         niepelnosprawnym: inputsValue.niepelnosprawnym,
//         starszym: inputsValue.starszym,
//         organisationName: inputsValue.organisationName,
//         street: inputsValue.street,
//         city: inputsValue.city,
//         postCode: inputsValue.postCode,
//         phone: inputsValue.phone,
//         date: inputsValue.date,
//         time: inputsValue.time,
//         note: inputsValue.note,
//         uid: user?.uid
//     })
// }






export const {inputsValuesChange} = inputsValuesSlice.actions
export default inputsValuesSlice.reducer
