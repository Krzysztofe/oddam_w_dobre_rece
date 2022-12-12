import React from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajFormTop";
import OddajFormContainer from "../OddajFormContainer";
import InputSelect from "../oddajFormInputs/InputSelect";
import OddajButtons from "../OddajButtons";

const OddajContainer_2 = () => {

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
                <OddajFormContainer>
                    <InputSelect textLabel='Liczba 60 l. worków:'
                                 selectValues={[1, 2, 3, 4, 5, 6]}
                                 inputName='selectBags'/>
                    <OddajButtons/>
                </OddajFormContainer>
            </main>
        </>
    );
};

export default OddajContainer_2;