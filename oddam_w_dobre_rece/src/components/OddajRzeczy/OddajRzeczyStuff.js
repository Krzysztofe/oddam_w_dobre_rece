import React from 'react';

const OddajRzeczyStuff = ({inputsValue, handleChange,
                              counter, handleDecrease, handleIncrease}) => {
    return (
        <div>
            <p>krok 1/4</p>
            <h2>zaznacz co chcesz oddać:</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>

                <label>
                    <input type='radio'
                           name='selectStuff'
                           value='ubrania które'
                           checked = {inputsValue.selectStuff === 'ubrania które'}
                           onChange={handleChange}
                    />
                    ubrania, które nadają się do ponownego użycia</label>
                <label>
                    <input type='radio'
                    name = 'selectStuff'
                    value = 'do wyrzucenia'
                    checked = {inputsValue.selectStuff === 'do wyrzucenia'}
                    onChange={handleChange}
                    />
                    ubrania, do wyrzucenia</label>
                <label>
                    <input type='radio'
                    name = 'selectStuff'
                    value = 'zabawki'
                    checked = {inputsValue.selectStuff === 'zabawki'}
                    onChange={handleChange}/>
                    zabawki</label>
                <label>
                    <input type='radio'
                    name = 'selectStuff'
                    value = 'książki'
                    checked={inputsValue.selectStuff === 'książki'}
                    onChange = {handleChange}/>
                    książki</label>
                <label>
                    <input type='radio'
                    name = "selectStuff"
                    value = 'inne'
                    checked={inputsValue.selectStuff === 'inne'}
                    onChange={handleChange} />
                    inne</label>
            </div>
            <button onClick={handleIncrease}>dalej</button>
        </div>
    );
};

export default OddajRzeczyStuff;