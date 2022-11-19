import React, {useContext} from 'react';
// import {GlobalContext} from "../../oddajContext/GlobalContextProv";
import {FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {inputsValuesChange} from '../../../../storeFeatures/inputsValuesSlice'

interface Props {
    value: string
}

const InputRadio: FC<Props> = ({value}) => {

    // const {inputsValue, handleChange} = useContext(GlobalContext)

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    const checkedValue: string = value

    return (
        <div className="oddajForm1__input">
            <input type='radio' name='selectStuff'
                   value={value}
                   checked={inputsValues.selectStuff === checkedValue}
                   onChange={(e) => dispatch(
                       inputsValuesChange({...inputsValues, selectStuff: e.target.value})
                   )}
                   className='oddajForm1__radio'/>
            <label className='oddajForm1__label'>
                {value}
            </label>
        </div>
    );
};


export default InputRadio;