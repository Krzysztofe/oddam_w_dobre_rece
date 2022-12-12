import React from "react";
import {RootState} from "../../redux/store";
import {decrease, increase} from "../../redux/storeFeatures/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from '../../redux/storeFeatures/firebasePostSlice'
import {inputsValuesChange} from '../../redux/storeFeatures/inputsValuesSlice'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../data/FireBaseConfig";

const OddajButtons = () => {

    const counter = useSelector((state: RootState) => state.btnCounter.value)
    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const [user, loading, error] = useAuthState(auth);
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increase())
    }
    const handleDecrease = () => {
        dispatch(decrease())
    }

    const createSummary = () => {
        dispatch(createPost({
                selectStuff: inputsValues.selectStuff,
                selectBags: inputsValues.selectBags,
                localisation: inputsValues.selectLocalisation,
                dzieciom: inputsValues.dzieciom,
                matkom: inputsValues.matkom,
                bezdomnym: inputsValues.bezdomnym,
                niepelnosprawnym: inputsValues.niepelnosprawnym,
                starszym: inputsValues.starszym,
                organisationName: inputsValues.organisationName,
                street: inputsValues.street,
                city: inputsValues.city,
                postCode: inputsValues.postCode,
                phone: inputsValues.phone,
                date: inputsValues.date,
                time: inputsValues.time,
                note: inputsValues.note,
                uid: user?.uid
            }
        ))
        dispatch(inputsValuesChange({
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
        ))
    }

    const increaseAndSummary = () => {
        createSummary()
        handleIncrease()
    }

    return (
        <div className="formButtons">

            <button onClick={handleDecrease}
                    className='formButton'>
                wstecz
            </button>

            <button onClick={counter === 5 ? increaseAndSummary : handleIncrease}
                    className='formButton'>
                dalej
            </button>

        </div>
    );
};


export default OddajButtons;