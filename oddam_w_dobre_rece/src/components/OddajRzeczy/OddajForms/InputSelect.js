import {useState} from "react";

const InputSelect = ({
                         array, textLabel,
                         inputsValue, setInputsValue
                     }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(state => !state)
    }

    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    return (
        <div className='select__container'>

            <label className='selec__label'>
                {textLabel}
            </label>

            <div className='select__options'>

                <div onClick={handleOpen}
                     className="select__top">
                    {inputsValue.selectBags}
                    <div className={open ? 'select__arrow--up' : 'select__arrow'}> </div>
                </div>

                {open &&
                    <>
                        {
                            array.map(item => {
                                return <div key={item}
                                            className="select__option"
                                            onClick={e => {
                                                handleSelect(item)
                                                handleOpen()
                                            }}>
                                    {item}
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