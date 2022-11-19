import React, {useContext} from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajForm from "../OddajForms/OddajForm";
import InputSelect from "../OddajForms/oddajFormInputs/InputSelect";
import OddajButtons from "../OddajButtons";
// import {GlobalContext} from "../oddajContext/GlobalContextProv";

const OddajContainer_2 = () => {

    // const {inputsValue, setInputsValue} = useContext(GlobalContext)

    return (
        <>
            <OddajBelt text='Wszytie rzeczy do oddania
                        zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować
                        rzczy znajdziesz TUTAJ '/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 2/4', 'podaj liczbę 60 l. worków,' +
                    ' w które spkowałeś/aś rzeczy:']}/>
                <OddajForm>
                    <InputSelect textLabel='Liczba 60 l. worków:'
                                 selectValues={[1, 2, 3, 4, 5, 6]}
                                 inputName='selectBags'/>
                    <OddajButtons/>
                </OddajForm>
            </main>
        </>
    );
};

export default OddajContainer_2;