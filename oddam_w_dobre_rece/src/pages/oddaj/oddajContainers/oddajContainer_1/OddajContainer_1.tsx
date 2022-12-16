import React from 'react';
import OddajBelt from "../../oddajBelt/OddajBelt";
import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper";
import InputRadio from "../../oddajFormInputs/inputRadio/InputRadio";
import {useDispatch} from "react-redux";
import {increase} from "../../../../redux/storeFeatures/counterSlice";

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

                <OddajFormWrapper>
                    <InputRadio value='ubrania, które nadają się do ponownego użycia'/>
                    <InputRadio value='ubrania, do wyrzucenia'/>
                    <InputRadio value='zabawki'/>
                    <InputRadio value='ksiązki'/>
                    <InputRadio value='inne'/>

                    <div className="oddajButtons">
                        <button onClick={()=> dispatch(increase())}
                                className='oddajButton'>
                            dalej
                        </button>
                    </div>

                </OddajFormWrapper>
            </main>
        </>
    );
};

export default OddajContainer_1;