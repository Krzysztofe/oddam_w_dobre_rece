import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/GlobalContextProv";

const InputCheckbox = ({value, name, label}) => {
    const {inputsValue, handleChange} = useContext(GlobalContext)

    return (
        <label className='oddajForm3__label'>
            <input type='checkbox' name={name}
                   value={value}
                   checked={value}
                   onChange={handleChange}
                   className='oddajForm3__checkbox'/>
            <div className='oddajForm3__checkboxStyle'>{label}</div>
        </label>
    );
};

export default InputCheckbox;