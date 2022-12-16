import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {inputsValuesChange} from '../../../../redux/storeFeatures/inputsValuesSlice'

interface Props {
    value: boolean;
    name: string;
    label: string
}

const InputCheckbox: React.FC<Props> = ({value, name, label}) => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    return (
        <label className='checkbox__label'>
            <input type='checkbox' name={name}
                   checked={value}
                   onChange={e => dispatch(
                       inputsValuesChange({...inputsValues, [name]: e.target.checked})
                   )}
                   className='checkbox'/>
            <div className='checkbox__style'>{label}</div>
        </label>
    );
};

export default InputCheckbox;