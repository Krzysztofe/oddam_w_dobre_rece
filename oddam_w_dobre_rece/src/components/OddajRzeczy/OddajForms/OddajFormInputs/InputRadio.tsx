import React, {useContext} from 'react';
import {GlobalContext} from "../../OddajContext/GlobalContextProv";
import {FC} from 'react'

interface Props{
    value: string
}

const InputRadio:FC<Props> = ({value}) => {

    const {inputsValue, handleChange} = useContext(GlobalContext)

    const checkedValue:string = value

    return (
        <div className="oddajForm1__input">
            <input type='radio' name='selectStuff'
                   value={value}
                   checked={inputsValue.selectStuff === checkedValue}
                   onChange={handleChange}
                   className='oddajForm1__radio'/>
            <label className='oddajForm1__label'>
                {value}
            </label>
        </div>
    );
};



export default InputRadio;