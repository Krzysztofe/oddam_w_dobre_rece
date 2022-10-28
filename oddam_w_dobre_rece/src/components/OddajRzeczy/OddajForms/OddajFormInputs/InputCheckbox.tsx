import React, {useContext} from 'react';
import {GlobalContext} from "../../OddajContext/GlobalContextProv";

interface Props {
    value: boolean;
    name: string;
    label: string
}

const InputCheckbox:React.FC<Props> = ({value, name, label}) => {

    const {handleChange} = useContext(GlobalContext)

    return (
        <label className='oddajForm3__label'>
            <input type='checkbox' name={name}
                   checked={value}
                   onChange={handleChange}
                   className='oddajForm3__checkbox'/>
            <div className='oddajForm3__checkboxStyle'>{label}</div>
        </label>
    );
};

export default InputCheckbox;