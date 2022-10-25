import React, {useContext, FC} from "react";
import OddajHeader from "./OddajHeader/OddajHeader";
import OddajBelt from "./OddajBelt";
import OddajFormTop from "./OddajForms/OddajFormTop";
import OddajForm1 from "./OddajForms/OddajForm1";
import OddajForm2 from "./OddajForms/OddajForm2";
import OddajForm3 from "./OddajForms/OddajForm3";
import OddajForm4 from "./OddajForms/OddajForm4";
import OddajSummary from "./OddajForms/OddajSummary";
import OddajThanx from "./OddajForms/OddajThanx";
import Section_5 from "../Home/Section_5/Section_5";
import Footer from "../Home/Footer";
import {GlobalContext} from "./OddajContext/GlobalContextProv";
import InputSelect from "./OddajForms/OddajFormInputs/InputSelect";
import OddajButtons from "./OddajButtons";
import InputRadio from "./OddajForms/OddajFormInputs/InputRadio";
import InputCheckbox from "./OddajForms/OddajFormInputs/InputCheckbox";
import Buttons from "./OddajButtons";
import InputText from "./OddajForms/OddajFormInputs/InputText";
import Title from "../Title";
import {Link} from "react-router-dom";

const OddajMain: FC = () => {

    const {counter, handleChange, handleIncrease, inputsValue, setInputsValue} = useContext(GlobalContext)

    const handleSelectBags = (item: string | number): void => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    const handleSelectLocalization = (item: string | number): void => {
        setInputsValue({...inputsValue, selectLocalisation: item})
    }

    return (
        <>
            <OddajHeader/>

            {counter === 1 &&
                <>
                    <OddajBelt text='Uzupełnij szczegóły dotyczace
                       twoich rzeczy. Dzięki temu bedziemy wiedzieć
                       komu najlepiej je przekazać.'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 1/4', 'zaznacz co chcesz oddać:']}/>

                        <OddajForm1>
                            <InputRadio value='ubrania, które nadają się do ponownego użycia'/>
                            <InputRadio value='ubrania, do wyrzucenia'/>
                            <InputRadio value='zabawki'/>
                            <InputRadio value='ksiązki'/>
                            <InputRadio value='inne'/>

                            <div className="formButtons">
                                <button onClick={handleIncrease}
                                        className='formButton'>
                                    dalej
                                </button>
                            </div>

                        </OddajForm1>
                    </main>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt text='Wszytie rzeczy do oddania
                        zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować
                        rzczy znajdziesz TUTAJ '/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 2/4', 'podaj liczbę 60 l. worków,' +
                            ' w które spkowałeś/aś rzeczy:']}/>
                        <OddajForm2>
                            <InputSelect textLabel='Liczba 60 l. worków:'
                                         array={[1, 2, 3, 4, 5, 6]}
                                         inputsValueSelect={inputsValue.selectBags}
                                         handleSelect={handleSelectBags}/>
                            <OddajButtons/>
                        </OddajForm2>
                    </main>
                </>
            }

            {counter === 3 &&
                <>
                    <OddajBelt text='Jeśli wiesz komu chcesz pomóc,
                        możesz wpisać nazwę organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji
                        bądź celu ich pomocy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 3/4', 'lokalizacja:']}/>
                        <OddajForm3>
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
                        </OddajForm3>
                    </main>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 4/4', 'podaj adres oraz termin ' +
                            'odbioru rzeczy przez kuriera:']}/>

                        <OddajForm4>
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
                        </OddajForm4>
                    </main>
                </>
            }

            {counter === 5 &&
                <>
                    <main className="wrapper wrapper--oddajMain">
                        <div className="belt__empty"></div>
                        <OddajFormTop
                            text={['i', 'podsumowanie twojej darowizny']}/>
                        <OddajSummary/>
                    </main>
                </>
            }

            {counter === 6 &&
                <main className="wrapper wrapper--oddajMain">
                    <div className="belt__empty"></div>

                    <OddajFormTop
                        text={['i', '']}/>

                    <OddajThanx>
                        <Title text={['dziękujemy za przesłanie formularza',
                            'na maila prześlemy wszelkie informacje o odbiorze']}
                               classContainer={'oddajThnx__container'}
                               classH2={'oddajThnx__h2'}
                               classUnderline={'oddajThnx__decoration'}/>

                        <Link to='/' className='ddajThanx__link'>
                            <button className='ddajThanx__button'>
                                strona główna
                            </button>
                        </Link>
                    </OddajThanx>
                </main>
            }
            <Section_5/>
            <Footer/>
        </>
    );
}
export default OddajMain;