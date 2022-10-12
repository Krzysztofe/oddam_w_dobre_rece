import Buttons from "../../Buttons";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";

const OddajForm4 = () => {

    const {inputsValue, handleChange} = useContext(GlobalContext)


    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    return (
        <main className='oddajForm__inputs'>

            <aside className="form4__leftContainer">
                <h3 className='form4__h3'>Adres odbioru:</h3>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Ulica</label>
                    <input type='text' name='street'
                           value={inputsValue.street}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Miasto</label>
                    <input type='text' name='city'
                           value={inputsValue.city}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Kod poczotowy</label>
                    <input type='text' name='postCode'
                           value={inputsValue.postCode}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Numer telefonu</label>
                    <input type='number' name='phone'
                           value={inputsValue.phone}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>
            </aside>


            <aside className="form4__rightContainer">
                <h3 className='form4__h3'>termin odbioru:</h3>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Data</label>
                    <input type='date' name='date'
                           value={inputsValue.date}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Godzina</label>
                    <input type='time' name='time'
                           value={inputsValue.time}
                           onChange={propsHandleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Uwagi dla kuriera</label>
                    <textarea rows='2' name='note'
                              value={inputsValue.note}
                              onChange={propsHandleChange}
                              className='form4__textarea'/>
                </div>
            </aside>

            <Buttons/>
        </main>
    );
};

export default OddajForm4;







