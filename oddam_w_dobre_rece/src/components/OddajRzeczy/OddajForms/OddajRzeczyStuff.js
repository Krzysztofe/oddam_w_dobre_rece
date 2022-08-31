import React from 'react';
import OddajFormHeader from "./OddajFormHeader";

const OddajRzeczyStuff = ({
                              inputsValue, handleChange,
                              counter, handleDecrease, handleIncrease
                          }) => {
    return (
        // <section className="wrapper wrapper--OddajForms">
<>

                {/*<OddajFormHeader step={'1/4'} text={'zaznacz co chcesz oddać:'}/>*/}

                <div className='oddaj1__inputsContainer'>
                    <input type='radio'
                           name='selectStuff'
                           value='ubrania które'
                           checked={inputsValue.selectStuff === 'ubrania które'}
                           onChange={handleChange}
                           className='oddaj1__radio'
                    />
                    <label className='oddaj1__label'> ubrania, które nadają się do ponownego użycia
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='do wyrzucenia'
                           checked={inputsValue.selectStuff === 'do wyrzucenia'}
                           onChange={handleChange}
                           className='oddaj1__radio'
                    />
                    <label className='oddaj1__label'> ubrania, do wyrzucenia
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='zabawki'
                           checked={inputsValue.selectStuff === 'zabawki'}
                           onChange={handleChange}
                           className='oddaj1__radio'/>
                    <label className='oddaj1__label'> zabawki
                    </label>


                    <input type='radio'
                           name='selectStuff'
                           value='książki'
                           checked={inputsValue.selectStuff === 'książki'}
                           onChange={handleChange}
                           className='oddaj1__radio'/>
                    <label className='oddaj1__label'> książki
                    </label>

                    <input type='radio'
                           name="selectStuff"
                           value='inne'
                           checked={inputsValue.selectStuff === 'inne'}
                           onChange={handleChange}
                           className='oddaj1__radio'/>
                    <label className='oddaj1__label'>
                        inne
                    </label>

                    <button onClick={handleIncrease}
                            className='oddaj1__button'
                    >
                        dalej
                    </button>
                </div>


</>
        // </section>
    );
};

export default OddajRzeczyStuff;