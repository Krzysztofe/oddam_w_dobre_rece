import React from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajFormTop";
import OddajFormContainer from "../OddajFormContainer";
import InputRadio from "../oddajFormInputs/InputRadio";
import {useDispatch} from "react-redux";
import {increase} from "../../../redux/storeFeatures/counterSlice";

const OddajContainer_1 = () => {

    const dispatch = useDispatch()

    return (
        <>
            <OddajBelt text='Uzupełnij szczegóły dotyczace
                       twoich rzeczy. Dzięki temu bedziemy wiedzieć
                       komu najlepiej je przekazać.'/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 1/4', 'zaznacz co chcesz oddać:']}/>

                <OddajFormContainer>
                    <InputRadio value='ubrania, które nadają się do ponownego użycia'/>
                    <InputRadio value='ubrania, do wyrzucenia'/>
                    <InputRadio value='zabawki'/>
                    <InputRadio value='ksiązki'/>
                    <InputRadio value='inne'/>

                    <div className="formButtons">
                        <button onClick={()=> dispatch(increase())}
                                className='formButton'>
                            dalej
                        </button>
                    </div>

                </OddajFormContainer>
            </main>
        </>
    );
};

export default OddajContainer_1;