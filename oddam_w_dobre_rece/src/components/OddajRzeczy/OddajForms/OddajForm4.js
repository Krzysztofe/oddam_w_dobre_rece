import Buttons from "../../Buttons";

const OddajForm4 = ({
                        inputsValue, handleChange,
                        handleIncrease, handleDecrease
                    }) => {
    return (
        <main className='form4__inputsContainer'>

            <aside className="form4__leftContainer">
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
            </aside>



            <aside className="form4__rightContainer">
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

            </aside>

            <Buttons
                handleDecrease = {handleDecrease}
                handleIncrease = {handleIncrease}
            />

        </main>



    );
};

export default OddajForm4;







