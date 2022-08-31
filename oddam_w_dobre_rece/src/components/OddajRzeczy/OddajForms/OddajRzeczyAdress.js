import React from 'react';

const OddajRzeczyAdress = ({inputsValue, handleChange,
                               handleIncrease, handleDecrease}) => {
    return (
        <div>
            <p>krok4/4</p>
            <h1>podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            <div style={{
                display: 'flex', flexDirection: 'column',
                width: '50%'
            }}>
                <h3>adres odbioru:</h3>

                <label>ulica</label>
                <input type='text'
                       name='street'
                       value={inputsValue.street}
                       onChange={handleChange}/>

                <label>miasto</label>
                <input type='text'
                       name='city'
                       value={inputsValue.city}
                       onChange={handleChange}/>

                <label>kod pocztowy</label>
                <input type='text'
                       name='postCode'
                       value={inputsValue.postCode}
                       onChange={handleChange}/>

                <label>nr telefonu</label>
                <input type='number'
                       name='phone'
                       value={inputsValue.phone}
                       onChange={handleChange}/>


                <h3>termin odbioru:</h3>

                <label>data</label>
                <input type='number'
                       name='date'
                       value={inputsValue.date}
                       onChange={handleChange}/>

                <label>godzina</label>
                <input type='number'
                       name='time'
                       value={inputsValue.time}
                       onChange={handleChange}/>

                <label>uwagi dla kuriera</label>
                <input type='textarea'
                       name='note'
                       value={inputsValue.note}
                       onChange={handleChange}/>
            </div>
            <button onClick={handleDecrease}>wstecz</button>
            <button onClick={handleIncrease}>dalej</button>

        </div>
    );
};

export default OddajRzeczyAdress;







