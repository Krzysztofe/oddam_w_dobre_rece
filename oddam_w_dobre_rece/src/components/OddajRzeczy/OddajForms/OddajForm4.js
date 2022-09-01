import React from 'react';

const OddajForm4 = ({
                        inputsValue, handleChange,
                        handleIncrease, handleDecrease
                    }) => {
    return (
        <form className='form4__inputsContainer'>

            <div className="form4__leftContainer">
                <h3 className='form4__h3'>adres odbioru:</h3>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>ulica</label>
                    <input type='text'
                           name='street'
                           value={inputsValue.street}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>

                    <label className='form4__label'>miasto</label>
                    <input type='text'
                           name='city'
                           value={inputsValue.city}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>kod poczotowy</label>
                    <input type='text'
                           name='postCode'
                           value={inputsValue.postCode}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>numer telefonu</label>
                    <input type='number'
                           name='phone'
                           value={inputsValue.phone}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>
            </div>



            <div className="form4__rightContainer">
                <h3 className='form4__h3'>termin odbioru:</h3>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>data</label>
                    <input type='number'
                           name='date'
                           value={inputsValue.date}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>godzina</label>
                    <input type='number'
                           name='time'
                           value={inputsValue.time}
                           onChange={handleChange}
                           className='form4__input'/>
                </div>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>uwagi dla kuriera</label>
                    <textarea
                        rows='4'
                        name='note'
                        value={inputsValue.note}
                        onChange={handleChange}
                        className='form4__textarea'/>
                </div>

            </div>

            <div className="form4__buttonsContainer">
                <button
                    onClick={handleDecrease}
                    className='form4__button'
                >wstecz </button>


                <button
                    onClick={handleIncrease}
                    className='form4__button'
                >dalej</button>

            </div>

        </form>



    );
};

export default OddajForm4;







