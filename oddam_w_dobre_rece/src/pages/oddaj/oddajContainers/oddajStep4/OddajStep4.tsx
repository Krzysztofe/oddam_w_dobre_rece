import React from 'react';
import OddajBelt from "../../oddajBelt/OddajBelt";
import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper";
import InputText from "../../oddajFormInputs/inputText/InputText";
import OddajButtons from "../../oddajButtons/OddajButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {inputsValuesChange} from '../../../../redux/storeFeatures/inputsValuesSlice'

const OddajStep4 = () => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    return (
        <>
            <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 4/4', 'podaj adres oraz termin ' +
                    'odbioru rzeczy przez kuriera:']}/>

                <OddajFormWrapper>
                    <aside className="step4__leftContainer">
                        <h3 className='step4__h3'>Adres odbioru:</h3>

                        <InputText type='text'
                                   name='street'
                                   label='Ulica'
                                   value={inputsValues.street}/>

                        <InputText type='text'
                                   name='city'
                                   label='Miasto'
                                   value={inputsValues.city}/>

                        <InputText type='text'
                                   name='postCode'
                                   label='Kod pocztowy'
                                   value={inputsValues.postCode}/>

                        <InputText type='number'
                                   name='phone'
                                   label='Numer telefonu'
                                   value={inputsValues.phone}/>
                    </aside>


                    <aside className="step4__rightContainer">
                        <h3 className='step4__h3'>termin odbioru:</h3>

                        <InputText type='date'
                                   name='date'
                                   label='Data'
                                   value={inputsValues.date}/>

                        <InputText type='time'
                                   name='time'
                                   label='Godzina'
                                   value={inputsValues.time}/>

                        <div className='inputText__Container'>
                            <label className='form4__label'>Uwagi dla kuriera</label>
                            <textarea rows={2} name='note'
                                      value={inputsValues.note}
                                      onChange={e => dispatch(
                                          inputsValuesChange({...inputsValues, note: e.target.value}))}
                                      className='step4__textarea'/>
                        </div>
                    </aside>

                    <OddajButtons/>
                </OddajFormWrapper>
            </main>
        </>
    );
};

export default OddajStep4;