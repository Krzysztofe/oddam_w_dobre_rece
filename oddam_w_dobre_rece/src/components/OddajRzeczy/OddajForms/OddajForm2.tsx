import React, {useContext} from "react";
import InputSelect from "./OddajFormInputs/InputSelect";
import {GlobalContext} from "../OddajContext/GlobalContextProv";
import {motion} from 'framer-motion'
import OddajButtons from "../OddajButtons";

const OddajForm2 = () => {

    const {inputsValue, setInputsValue} = useContext(GlobalContext)

    const handleSelect = (item: string | number):void => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    return (
        <>
            <motion.main className='oddajForm__inputs'
                         initial={{opacity: 0, y: -40}}
                         animate={{opacity: 1, y: 0}}
                         transition={{delay: 0.1}}>

                <InputSelect textLabel= 'Liczba 60 l. worków:'
                             array={[1, 2, 3, 4, 5, 6]}
                             inputsValueSelect={inputsValue.selectBags}
                             handleSelect={handleSelect}/>
                <OddajButtons/>

            </motion.main>
        </>
    );
};

export default OddajForm2;