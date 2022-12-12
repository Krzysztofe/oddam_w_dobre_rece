import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: 1
}

export const btnCounterSlice = createSlice({
    name: "btnCounter",
    initialState,
    reducers:{
        increase: state => {
            if (state.value > 0 && state.value < 6){
                state.value +=1
            }},
        decrease: state => {
            if (state.value > -1 && state.value < 6){
                state.value -=1
            }},
        resetCounter: state => {
            state.value = 1
        }

    }
})

export const {increase, decrease, resetCounter} = btnCounterSlice.actions
export default btnCounterSlice.reducer