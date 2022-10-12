import Buttons from "../../Buttons";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import InputText from "./OddajFormInputs/InputText";

const OddajForm4 = () => {

    const {inputsValue, handleChange} = useContext(GlobalContext)


    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    return (
        <main className='oddajForm__inputs'>

            <aside className="form4__leftContainer">
                <h3 className='form4__h3'>Adres odbioru:</h3>

                <InputText type={'text'}
                           value={'street'}
                           label={'Ulica'}/>

                <InputText type={'text'}
                           value={'city'}
                           label={'Miasto'}/>

                <InputText type={'text'}
                           value={'postCode'}
                           label={'Kod pocztowy'}/>

                <InputText type={'number'}
                           value={'phone'}
                           label={'Numer telefonu'}/>

            </aside>


            <aside className="form4__rightContainer">
                <h3 className='form4__h3'>termin odbioru:</h3>

                <InputText type={'date'}
                           value={'date'}
                           label={'Data'}/>

                <InputText type={'time'}
                           value={'time'}
                           label={'Godzina'}/>

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







