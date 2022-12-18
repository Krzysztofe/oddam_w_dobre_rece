import React from 'react';
import OddajBelt from "../../oddajBelt/OddajBelt";
import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper"
import InputSelect from "../../oddajFormInputs/inputSelect/InputSelect";
import InputCheckbox from "../../oddajFormInputs/inputCheckbox/InputCheckbox";
import OddajButtons from "../../oddajButtons/OddajButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {inputsValuesChange} from "../../../../redux/storeFeatures/inputsValuesSlice";

const OddajStep3 = () => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    return (
        <>
            <OddajBelt text='Jeśli wiesz komu chcesz pomóc,
                        możesz wpisać nazwę organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji
                        bądź celu ich pomocy'/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 3/4', 'lokalizacja:']}/>

                <OddajFormWrapper>
                    <InputSelect textLabel=''
                                 selectValues={['Poznań', 'Warszawa', 'Kraków', 'Katowice']}
                                 inputName='selectLocalisation'/>

                    <h3 className='oddajStep3__h3'>komu chcesz pomóc?</h3>

                    <div className="oddajStep3__checkboxes">

                        <InputCheckbox value={inputsValues.dzieciom}
                                       name='dzieciom'
                                       label='dzieciom'/>

                        <InputCheckbox value={inputsValues.matkom}
                                       name='matkom'
                                       label='samotnym matkom'/>

                        <InputCheckbox value={inputsValues.bezdomnym}
                                       name='bezdomnym'
                                       label='bezdomnym'/>

                        <InputCheckbox value={inputsValues.niepelnosprawnym}
                                       name='niepelnosprawnym'
                                       label='Niepelnosprawnym'/>

                        <InputCheckbox value={inputsValues.starszym}
                                       name='starszym'
                                       label='Osobom starszymom'/>

                        <div className='checkbox__label'></div>

                    </div>

                    <h3 className='oddajStep3__h3'>
                        wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </h3>
                    <input type='text'
                           name='organisationName'
                           value={inputsValues.organisationName}
                           onChange={e => dispatch(
                               inputsValuesChange({...inputsValues, organisationName: e.target.value})
                           )}
                           className='oddajStep3__textInput'/>
                    <OddajButtons/>
                </OddajFormWrapper>
            </main>
        </>
    );
};

export default OddajStep3;