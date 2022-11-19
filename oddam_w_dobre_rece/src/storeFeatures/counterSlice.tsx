import {createSlice} from "@reduxjs/toolkit";

interface counterState{

}

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
        reset: state => {
            state.value = 1
        }

    }
})

export const {increase, decrease, reset} = btnCounterSlice.actions
export default btnCounterSlice.reducer