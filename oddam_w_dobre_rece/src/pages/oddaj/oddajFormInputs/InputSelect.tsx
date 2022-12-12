import React, {useState, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {inputsValuesChange} from '../../../redux/storeFeatures/inputsValuesSlice'


interface Props {
    selectValues: number[] | string []
    textLabel: string
    inputName: any
}

const InputSelect: FC<Props> = ({
                                    selectValues,
                                    textLabel,
                                    inputName
                                }) => {

    const [open, setOpen] = useState(false)

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)
    const dispatch = useDispatch()
    const inputsValuesKeyName: keyof typeof inputsValues = inputName

    const handleOpen = () => {
        setOpen(state => !state)
    }

    return (
        <div className='select__container'>

            <label className='selec__label'>
                {textLabel}
            </label>

            <div className='select__options'>

                <div onClick={handleOpen}
                     className="select__top">
                    {inputsValues[inputsValuesKeyName]}
                    <div className={open ? 'select__arrow--up' : 'select__arrow'}></div>
                </div>

                {open &&
                    <>
                        {selectValues.map(value => {
                            return <div key={value}
                                        className="select__option"
                                        onClick={e => {dispatch(
                                                inputsValuesChange({...inputsValues, [inputName]: value})
                                            )

                                            handleOpen()
                                        }}>
                                {value}
                            </div>
                        })
                        }
                    </>
                }

            </div>
        </div>
    );
};


export default InputSelect;