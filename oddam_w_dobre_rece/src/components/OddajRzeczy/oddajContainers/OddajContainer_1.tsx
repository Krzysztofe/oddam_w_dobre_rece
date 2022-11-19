import React, {useContext} from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajForm from "../OddajForms/OddajForm";
import InputRadio from "../OddajForms/oddajFormInputs/InputRadio";
// import {GlobalContext} from "../oddajContext/GlobalContextProv";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../store/store";
import {increase} from "../../../storeFeatures/counterSlice";

const OddajContainer_1 = () => {

    // const {handleIncrease} = useContext(GlobalContext)

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increase())
    }


    return (
        <>
            <OddajBelt text='Uzupełnij szczegóły dotyczace
                       twoich rzeczy. Dzięki temu bedziemy wiedzieć
                       komu najlepiej je przekazać.'/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 1/4', 'zaznacz co chcesz oddać:']}/>

                <OddajForm>
                    <InputRadio value='ubrania, które nadają się do ponownego użycia'/>
                    <InputRadio value='ubrania, do wyrzucenia'/>
                    <InputRadio value='zabawki'/>
                    <InputRadio value='ksiązki'/>
                    <InputRadio value='inne'/>

                    <div className="formButtons">
                        <button onClick={handleIncrease}
                                className='formButton'>
                            dalej
                        </button>
                    </div>

                </OddajForm>
            </main>
        </>
    );
};

export default OddajContainer_1;