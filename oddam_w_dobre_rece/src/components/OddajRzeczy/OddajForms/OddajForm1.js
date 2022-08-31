import React from 'react';
import OddajFormHeader from "./OddajFormTop";

const OddajForm1 = ({
                              inputsValue, handleChange,
                              counter, handleDecrease, handleIncrease
                          }) => {
    return (
<>
                <form className = 'oddajForm1__inputsContainer'>
                    <input type='radio'
                           name='selectStuff'
                           value='ubrania które'
                           checked={inputsValue.selectStuff === 'ubrania które'}
                           onChange={handleChange}
                           className='oddajForm1__radio'
                    />
                    <label className='oddajForm1__label'> ubrania, które nadają się do ponownego użycia
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='do wyrzucenia'
                           checked={inputsValue.selectStuff === 'do wyrzucenia'}
                           onChange={handleChange}
                           className='oddajForm1__radio'
                    />
                    <label className='oddajForm1__label'> ubrania, do wyrzucenia
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='zabawki'
                           checked={inputsValue.selectStuff === 'zabawki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'> zabawki
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='książki'
                           checked={inputsValue.selectStuff === 'książki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'> książki
                    </label>

                    <input type='radio'
                           name="selectStuff"
                           value='inne'
                           checked={inputsValue.selectStuff === 'inne'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
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