import React, {useContext} from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajForm from "../OddajForms/OddajForm";
import InputText from "../OddajForms/OddajFormInputs/InputText";
import OddajButtons from "../OddajButtons";
import {GlobalContext} from "../OddajContext/GlobalContextProv";

const OddajContainer_4 = () => {

    const {inputsValue, setInputsValue} = useContext(GlobalContext)

    return (
            <>
                <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

                <main className="wrapper wrapper--oddajMain">
                    <OddajFormTop
                        text={['krok 4/4', 'podaj adres oraz termin ' +
                        'odbioru rzeczy przez kuriera:']}/>

                    <OddajForm>
                        <aside className="form4__leftContainer">
                            <h3 className='form4__h3'>Adres odbioru:</h3>

                            <InputText type='text'
                                       name='street'
                                       label='Ulica'
                                       value={inputsValue.street}/>

                            <InputText type='text'
                                       name='city'
                                       label='Miasto'
                                       value={inputsValue.city}/>

                            <InputText type='text'
                                       name='postCode'
                                       label='Kod pocztowy'
                                       value={inputsValue.postCode}/>

                            <InputText type='number'
                                       name='phone'
                                       label='Numer telefonu'
                                       value={inputsValue.phone}/>
                        </aside>


                        <aside className="form4__rightContainer">
                            <h3 className='form4__h3'>termin odbioru:</h3>

                            <InputText type='date'
                                       name='date'
                                       label='Data'
                                       value={inputsValue.date}/>

                            <InputText type='time'
                                       name='time'
                                       label='Godzina'
                                       value={inputsValue.time}/>

                            <div className='form4__inputContainer'>
                                <label className='form4__label'>Uwagi dla kuriera</label>
                                <textarea rows={2} name='note'
                                          value={inputsValue.note}
                                          onChange={(e) =>
                                              setInputsValue({...inputsValue, note: e.target.value})}
                                          className='form4__textarea'/>
                            </div>
                        </aside>

                        <OddajButtons/>
                    </OddajForm>
                </main>
            </>
    );
};

export default OddajContainer_4;