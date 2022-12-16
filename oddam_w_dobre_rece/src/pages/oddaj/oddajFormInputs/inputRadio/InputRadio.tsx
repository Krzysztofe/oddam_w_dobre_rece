import {FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {inputsValuesChange} from '../../../../redux/storeFeatures/inputsValuesSlice'

interface Props {
    value: string
}

const InputRadio: FC<Props> = ({value}) => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()

    const checkedValue = value

    return (
        <div className="radio__container">
            <input type='radio' name='selectStuff'
                   value={value}
                   checked={inputsValues.selectStuff === checkedValue}
                   onChange={(e) => dispatch(
                       inputsValuesChange({...inputsValues, selectStuff: e.target.value})
                   )}
                   className='radio'/>
            <label>
                {value}
            </label>
        </div>
    );
};


export default InputRadio;