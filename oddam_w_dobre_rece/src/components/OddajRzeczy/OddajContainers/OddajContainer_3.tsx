import React, {useContext} from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajForm from "../OddajForms/OddajForm";
import InputSelect from "../OddajForms/OddajFormInputs/InputSelect";
import InputCheckbox from "../OddajForms/OddajFormInputs/InputCheckbox";
import OddajButtons from "../OddajButtons";
import {GlobalContext} from "../OddajContext/GlobalContextProv";

const OddajContainer_3 = () => {

    const {inputsValue, setInputsValue, handleChange} = useContext(GlobalContext)

    const handleSelectLocalization = (item: string | number): void => {
        setInputsValue({...inputsValue, selectLocalisation: item})
    }

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
                                 array={['Poznań', 'Warszawa', 'Kraków', 'Katowice']}
                                 inputsValueSelect={inputsValue.selectLocalisation}
                                 handleSelect={handleSelectLocalization}/>

                    <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

                    <div className="oddajForm3__checkboxes">

                        <InputCheckbox value={inputsValue.dzieciom}
                                       name='dzieciom'
                                       label='dzieciom'/>

                        <InputCheckbox value={inputsValue.matkom}
                                       name='matkom'
                                       label='samotnym matkom'/>

                        <InputCheckbox value={inputsValue.bezdomnym}
                                       name='bezdomnym'
                                       label='bezdomnym'/>

                        <InputCheckbox value={inputsValue.niepelnosprawnym}
                                       name='niepelnosprawnym'
                                       label='Niepelnosprawnym'/>

                        <InputCheckbox value={inputsValue.starszym}
                                       name='starszym'
                                       label='Osobom starszymom'/>

                        <div className='oddajForm3__label'></div>

                    </div>

                    <h3 className='oddajForm3__h3'>
                        wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </h3>

                    <input type='text'
                           name='organisationName'
                           value={inputsValue.organisationName}
                           onChange={handleChange}
                           className='oddajForm3__textInput'/>

                    <OddajButtons/>
                </OddajForm>
            </main>
        </>
    );
};

export default OddajContainer_3;