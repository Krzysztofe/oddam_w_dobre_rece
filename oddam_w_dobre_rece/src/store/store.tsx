import {configureStore} from "@reduxjs/toolkit";
import btnCounterSlice from "../storeFeatures/counterSlice"
import inputsValuesSlice from "../storeFeatures/inputsValuesSlice";
import firebasePostSlice from '../storeFeatures/firebasePostSlice'

export const store = configureStore({
    reducer: {
        btnCounter: btnCounterSlice,
        inputsValues: inputsValuesSlice,
        firebasePost: firebasePostSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch