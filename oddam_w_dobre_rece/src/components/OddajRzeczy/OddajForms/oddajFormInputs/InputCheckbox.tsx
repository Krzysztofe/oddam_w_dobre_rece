import React, {useContext} from 'react';
// import {GlobalContext} from "../../oddajContext/GlobalContextProv";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {inputsValuesChange} from '../../../../storeFeatures/inputsValuesSlice'

interface Props {
    value: boolean;
    name: string;
    label: string
}

const InputCheckbox: React.FC<Props> = ({value, name, label}) => {

    // const {handleChange} = useContext(GlobalContext)

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    const argument = {...inputsValues}

    return (
        <label className='oddajForm3__label'>
            <input type='checkbox' name={name}
                   checked={value}
                   onChange={(e) => dispatch(
                       inputsValuesChange({...inputsValues, [name]: e.target.checked})
                   )}

                   className='oddajForm3__checkbox'/>
            <div className='oddajForm3__checkboxStyle'>{label}</div>
        </label>
    );
};

export default InputCheckbox;