const OddajForm1 = ({
                        inputsValue,
                        handleChange,
                        handleIncrease
                    }) => {
    return (
        <>
            <main className='oddajForm__inputs'>

                <div className="oddajForm1__input">
                    <input type='radio' name='selectStuff'
                           value=', ubrania, które nadają się do ponownego użycia'
                           checked={inputsValue.selectStuff ===
                               ', ubrania, które nadają się do ponownego użycia'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
                        Ubrania, które nadają się do ponownego użycia
                    </label>
                </div>

                <div className="oddajForm1__input">
                    <input type='radio' name='selectStuff'
                           value=', ubrania do wyrzucenia'
                           checked={inputsValue.selectStuff ===
                               ', ubrania do wyrzucenia'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
                        Ubrania, do wyrzucenia
                    </label>
                </div>

                <div className="oddajForm1__input">
                    <input type='radio' name='selectStuff'
                           value=', zabawki'
                           checked={inputsValue.selectStuff ===
                               ', zabawki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
                        Zabawki
                    </label>
                </div>

                <div className="oddajForm1__input">
                    <input type='radio' name='selectStuff'
                           value=', książki'
                           checked={inputsValue.selectStuff ===
                               ', książki'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
                        Książki
                    </label>
                </div>

                <div className="oddajForm1__input">
                    <input type='radio' name="selectStuff"
                           value=', inne,'
                           checked={inputsValue.selectStuff ===
                               ', inne,'}
                           onChange={handleChange}
                           className='oddajForm1__radio'/>
                    <label className='oddajForm1__label'>
                        Inne
                    </label>
                </div>

                <div className="formButtons">
                    <button onClick={handleIncrease}
                            className='formButton'>
                        dalej
                    </button>
                </div>

            </main>
        </>
    );
};

export default OddajForm1;