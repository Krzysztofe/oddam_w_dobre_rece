import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputsValuesChange} from '../../../redux/storeFeatures/inputsValuesSlice'
import {RootState} from "../../../redux/store";

interface Props {
    label: string;
    name: string;
    value: string;
    type: string
}

const InputText: FC<Props> = ({
                                  label,
                                  name,
                                  value,
                                  type
                              }) => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    return (
        <div className='form4__inputContainer'>
            <label className='form4__label'>{label}</label>
            <input type={type} name={name}
                   value={value}
                   onChange={e => dispatch(
                       inputsValuesChange({...inputsValues, [name]: e.target.value})
                   )}
                   className='form4__input'/>
        </div>
    );
};

export default InputText;