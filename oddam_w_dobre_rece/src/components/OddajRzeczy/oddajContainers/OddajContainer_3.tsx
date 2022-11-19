import React, {useContext} from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajForm from "../OddajForms/OddajForm";
import InputSelect from "../OddajForms/oddajFormInputs/InputSelect";
import InputCheckbox from "../OddajForms/oddajFormInputs/InputCheckbox";
import OddajButtons from "../OddajButtons";
// import {GlobalContext} from "../oddajContext/GlobalContextProv";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import InputText from "../OddajForms/oddajFormInputs/InputText";
import {inputsValuesChange} from "../../../storeFeatures/inputsValuesSlice";
// import {inputsValues} from '../../../storeFeatures/inputsValuesSlice'

const OddajContainer_3 = () => {

    // const {inputsValue, setInputsValue, handleChange} = useContext(GlobalContext)

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

                <OddajForm>
                    <InputSelect textLabel=''
                                 selectValues={['Poznań', 'Warszawa', 'Kraków', 'Katowice']}
                                 inputName='selectLocalisation'/>

                    <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

                    <div className="oddajForm3__checkboxes">

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

                        <div className='oddajForm3__label'></div>

                    </div>

                    <h3 className='oddajForm3__h3'>
                        wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </h3>
                    <input type='text'
                           name='organisationName'
                           value={inputsValues.organisationName}
                           onChange={(e) => dispatch(
                               inputsValuesChange({...inputsValues, organisationName: e.target.value})
                           )}
                           className='oddajForm3__textInput'/>
                    <OddajButtons/>
                </OddajForm>
            </main>
        </>
    );
};

export default OddajContainer_3;