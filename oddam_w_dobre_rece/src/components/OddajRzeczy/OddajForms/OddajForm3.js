import Buttons from "../../Buttons";
import InputSelect from "./OddajFormInputs/InputSelect";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import InputCheckbox from "./OddajFormInputs/InputCheckbox";

const OddajForm3 = () => {

    const {handleChange, inputsValue, setInputsValue} = useContext(GlobalContext)

    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectLocalisation: item})
    }

    return (
        <main className='oddajForm__inputs'>

            <InputSelect textLabel={''}
                         array={['poznań', 'warszawa', 'kraków', 'katowice']}
                         inputsValueSelect={inputsValue.selectLocalisation}
                         handleSelect={handleSelect}/>

            <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

            <div className="oddajForm3__checkboxes">

                <InputCheckbox value={inputsValue.dzieciom}
                               name={'dzieciom'}
                               label={'dzieciom'}/>

                <InputCheckbox value={inputsValue.matkom}
                               name={'matkom'}
                               label={'samotnym matkom'}/>

                <InputCheckbox value={inputsValue.bezdomnym}
                               name={'bezdomnym'}
                               label={'bezdomnym'}/>

                <InputCheckbox value={inputsValue.niepelnosprawnym}
                               name={'niepelnosprawnym'}
                               label={'Niepelnosprawnym'}/>

                <InputCheckbox value={inputsValue.starszym}
                               name={'starszym'}
                               label={'Osobom starszymom'}/>

                <div className='oddajForm3__label'> </div>

            </div>

            <h3 className='oddajForm3__h3'>
                wpisz nazwę konkretnej organizacji (opcjonalnie)
            </h3>

            <input type='text'
                   name='organisationName'
                   value={inputsValue.organisationName}
                   onChange={propsHandleChange}
                   className='oddajForm3__textInput'/>

            <Buttons/>
        </main>
    );
};

export default OddajForm3;