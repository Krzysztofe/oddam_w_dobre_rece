import {createSlice} from "@reduxjs/toolkit";

export interface InputsValue {
    selectStuff: string;
    selectBags: string | number;
    selectLocalisation: string | number;
    dzieciom: boolean;
    matkom: boolean;
    bezdomnym: boolean;
    niepelnosprawnym: boolean;
    starszym: boolean;
    organisationName: string;
    street: string;
    city: string;
    postCode: string;
    phone: string;
    date: string;
    time: string;
    note: string;
    uid: string
}

const value: InputsValue = {
    selectStuff: "",
    selectBags: "-- Wybierz --",
    selectLocalisation: "-- Wybierz --",
    dzieciom: false,
    matkom: false,
    bezdomnym: false,
    niepelnosprawnym: false,
    starszym: false,
    organisationName: "",
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    note: "",
    uid: ""
}

export const inputsValuesSlice = createSlice({
    name: 'inputsValues',
    initialState: {
        value
    },
    reducers: {
        inputsValuesChange: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {inputsValuesChange} = inputsValuesSlice.actions
export default inputsValuesSlice.reducer
