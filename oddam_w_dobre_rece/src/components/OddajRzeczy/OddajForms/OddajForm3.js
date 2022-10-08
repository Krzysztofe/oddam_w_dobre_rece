import Buttons from "../../Buttons";
import InputSelect from "./InputSelect";

const OddajForm3 = ({
                        handleChange, inputsValue, setInputsValue,
                        handleIncrease, handleDecrease
                    }) => {

    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    const propsHandleIncrease = (e) => {
        typeof handleIncrease === 'function' && handleIncrease(e)
    }

    const propsHandleDecrease = (e) => {
        typeof handleDecrease === 'function' && handleDecrease(e)
    }
    const handleSelect = (item) => {
        setInputsValue({...inputsValue,selectLocalisation: item})
    }

    return (
        <>
            <main className='oddajForm__inputs'>

                <InputSelect textLabel={''}
                             array={['poznań', 'warszawa', 'kraków', 'katowice']}
                             inputsValueKey={inputsValue.selectLocalisation}
                             handleSelect={handleSelect}/>

                <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

                <div className="oddajForm3__checkboxes">

                    <label className ='oddajForm3__label'>
                        <input type='checkbox' name='dzieciom'
                               value={inputsValue.dzieciom}
                               checked={inputsValue.dzieciom}
                               onChange={propsHandleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> dzieciom</div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='matkom'
                               value={inputsValue.matkom}
                               checked={inputsValue.matkom}
                               onChange={propsHandleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> samotnym matkom </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='bezdomnym'
                               value={inputsValue.bezdomnym}
                               checked={inputsValue.bezdomnym}
                               onChange={propsHandleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> bezdomnym </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='niepelnosprawnym'
                               value={inputsValue.niepelnosprawnym}
                               checked={inputsValue.niepelnosprawnym}
                               onChange={propsHandleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> niepełnosprawnym </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='starszym'
                               value={inputsValue.starszym}
                               checked={inputsValue.starszym}
                               onChange={propsHandleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> osobom starszym </div>
                    </label>

                </div>

                <h3 className='oddajForm3__h3'>
                    wpisz nazwę konkretnej organizacji (opcjonalnie)
                </h3>

                    <input type='text'
                           name='organisationName'
                           value={inputsValue.organisationName}
                           onChange={propsHandleChange}
                           className='oddajForm3__textInput'/>

                <Buttons handleDecrease={propsHandleDecrease}
                    handleIncrease = {propsHandleIncrease}/>

            </main>
        </>

    );
};

export default OddajForm3;