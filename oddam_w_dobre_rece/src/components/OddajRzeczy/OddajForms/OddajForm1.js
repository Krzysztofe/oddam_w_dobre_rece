import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalContextProv";
import InputRadio from "./InputRadio";


const OddajForm1 = () => {

    const {handleIncrease} = useContext(GlobalContext)


    const propsHandleIncrease = (e) => {
      typeof handleIncrease === 'function' && handleIncrease(e)
    }

    return (
        <>
            <main className='oddajForm__inputs'>

                <InputRadio value={'ubrania, które nadają się do ponownego użycia'}/>
                <InputRadio value={'ubrania, do wyrzucenia'}/>
                <InputRadio value={'zabawki'}/>
                <InputRadio value={'ksiązki'}/>
                <InputRadio value={'inne'}/>

                <div className="formButtons">
                    <button onClick={propsHandleIncrease}
                            className='formButton'>
                        dalej
                    </button>
                </div>

            </main>
        </>
    );
};

export default OddajForm1;