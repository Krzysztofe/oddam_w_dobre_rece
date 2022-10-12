import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/GlobalContextProv";

const InputRadio = ({value}) => {
    const {inputsValue, handleChange} = useContext(GlobalContext)

    return (
        <div className="oddajForm1__input">
            <input type='radio' name='selectStuff'
                   value={value}
                   checked={inputsValue.selectStuff === value}
                   onChange={handleChange}
                   className='oddajForm1__radio'/>
            <label className='oddajForm1__label'>
                {value}
            </label>
        </div>
    );
};

export default InputRadio;