import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/GlobalContextProv";

const InputText = ({label, value, type}) => {
const {handleChange, inputsValue} = useContext(GlobalContext)

    return (
        <div className='form4__inputContainer'>
            <label className='form4__label'>{label}</label>
            <input type={type} name={value}
                   value={inputsValue.value}
                   onChange={handleChange}
                   className='form4__input'/>
        </div>
    );
};

export default InputText;