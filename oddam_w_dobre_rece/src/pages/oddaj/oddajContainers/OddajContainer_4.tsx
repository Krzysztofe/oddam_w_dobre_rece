import React from 'react';
import OddajBelt from "../OddajBelt";
import OddajFormTop from "../OddajFormTop";
import OddajFormContainer from "../OddajFormContainer";
import InputText from "../oddajFormInputs/InputText";
import OddajButtons from "../OddajButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {inputsValuesChange} from '../../../redux/storeFeatures/inputsValuesSlice'

const OddajContainer_4 = () => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    return (
        <>
            <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 4/4', 'podaj adres oraz termin ' +
                    'odbioru rzeczy przez kuriera:']}/>

                <OddajFormContainer>
                    <aside className="form4__leftContainer">
                        <h3 className='form4__h3'>Adres odbioru:</h3>

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


                    <aside className="form4__rightContainer">
                        <h3 className='form4__h3'>termin odbioru:</h3>

                        <InputText type='date'
                                   name='date'
                                   label='Data'
                                   value={inputsValues.date}/>

                        <InputText type='time'
                                   name='time'
                                   label='Godzina'
                                   value={inputsValues.time}/>

                        <div className='form4__inputContainer'>
                            <label className='form4__label'>Uwagi dla kuriera</label>
                            <textarea rows={2} name='note'
                                      value={inputsValues.note}
                                      onChange={e => dispatch(
                                          inputsValuesChange({...inputsValues, note: e.target.value})
                                      )}
                                      className='form4__textarea'/>
                        </div>
                    </aside>

                    <OddajButtons/>
                </OddajFormContainer>
            </main>
        </>
    );
};

export default OddajContainer_4;