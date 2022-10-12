import Buttons from "../../Buttons";
import InputSelect from "./InputSelect";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import InputCheckbox from "./InputCheckbox";

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
                         inputsValueKey={inputsValue.selectLocalisation}
                         handleSelect={handleSelect}/>

            <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

            <div className="oddajForm3__checkboxes">

                <InputCheckbox name={'dzieciom'}
                               label={'dzieciom'}/>

                <InputCheckbox name={'matkom'}
                               label={'samotnym matkom'}/>

                <InputCheckbox name={'bezdomnym'}
                               label={'bezdomnym'}/>

                <InputCheckbox name={'niepelnosprawnym'}
                               label={'Niepełnosprawnym'}/>

                <InputCheckbox name={'starszym'}
                               label={'osobom starszym'}/>

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