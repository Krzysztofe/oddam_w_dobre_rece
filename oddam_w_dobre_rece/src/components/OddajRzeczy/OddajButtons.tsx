import React, {useContext} from "react";
import {GlobalContext} from "./OddajContext/GlobalContextProv";

const OddajButtons = () => {

    const {handleDecrease, handleIncrease, counter, createSummary} = useContext(GlobalContext)

    const increaseAndSummary = () => {
        createSummary()
        handleIncrease()
    }

    return (
        <div className="formButtons">

            <button onClick={handleDecrease}
                    className='formButton'>
                wstecz
            </button>

            <button onClick={counter === 5 ? increaseAndSummary : handleIncrease}
                    className='formButton'>
                dalej
            </button>

        </div>
    );
};



export default OddajButtons;