import React from 'react';
import OddajFormHeader from "./OddajFormTop";

const OddajForm1 = ({
                              inputsValue, handleChange,
                              counter, handleDecrease, handleIncrease
                          }) => {
    return (
<>
                <form className = 'oddajForm1__inputsContainer'>

                    <label className='oddajForm1__label'>
                        <input type='radio'
                           name='selectStuff'
                           value='ubrania, które nadają się do ponownego użycia'
                           checked={
                            inputsValue.selectStuff ===
                               'ubrania, które nadają się do ponownego użycia'}
                           onChange={handleChange}
                           className='oddajForm1__radio'
                    /> ubrania, które nadają się do ponownego użycia
                    </label>

                    <label className='oddajForm1__label'>

                    <input type='radio'
                           name='selectStuff'
                           value='ubrania do wyrzucenia'
                           checked={
                        inputsValue.selectStuff ===
                               'ubrania do wyrzucenia'}
                           onChange={handleChange}
                           className='oddajForm1__radio'
                    />ubrania, do wyrzucenia
                    </label>

                    <label className='oddajForm1__label'>

                    <input type='radio'
                           name='selectStuff'
                           value='zabawki'
                           checked={inputsValue.selectStuff === 'zabawki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>zabawki
                    </label>

                    <label className='oddajForm1__label'>
                    <input type='radio'
                           name='selectStuff'
                           value='książki'
                           checked={inputsValue.selectStuff === 'książki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    książki
                    </label>

                    <label className='oddajForm1__label'>

                    <input type='radio'
                           name="selectStuff"
                           value='inne,'
                           checked={inputsValue.selectStuff === 'inne,'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                        inne
                    </label>

    <button onClick={handleIncrease}
            className='oddajForm1__button'
    >
        dalej
    </button>

                </form>


</>
    );
};

export default OddajForm1;