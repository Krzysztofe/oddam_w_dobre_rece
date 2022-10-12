
import {useContext} from "react";
import Buttons from "../../Buttons";
import InputSelect from "./InputSelect";
import {GlobalContext} from "../Context/GlobalContextProv";

const OddajForm2 = () => {

    const {inputsValue, setInputsValue} = useContext(GlobalContext)

    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    return (
        <>
            <main className='oddajForm__inputs'>

                <InputSelect textLabel={'Liczba 60 l. worków:'}
                             array={["1", "2", "3", "4", "5", "6"]}
                             inputsValueKey={inputsValue.selectBags}
                             handleSelect={handleSelect}/>
                <Buttons/>

            </main>
        </>
    );
};

export default OddajForm2;