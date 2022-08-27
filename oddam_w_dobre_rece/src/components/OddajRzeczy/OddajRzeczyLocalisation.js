import React from 'react';

const OddajRzeczyLocalisation = ({handleChagne, inputsValue,
                                     handleIncrease,handleDecrease }) => {
    return (
        <>
            <p style={{marginTop: 150}}>krok 3/4</p>
            <h2>lokalizacja:</h2>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <select name='selectLocalisation'
                        value={inputsValue.selectLocalisation}
                        onChange={handleChagne}
                >
                    <option value='wybierz'>wybierz</option>
                    <option value='poznań'>poznań</option>
                    <option value='warszawa'>warszawa</option>
                    <option value='kraków'>kraków</option>
                    <option value='wrocław'>wrocław</option>
                </select>
                <h3>komu chcesz pomóc?</h3>
                <label> dzieciom
                    <input type='checkbox'
                           name='dzieciom'
                           value={inputsValue.dzieciom}
                           checked={inputsValue.dzieciom}
                           onChange={handleChagne}/>
                </label>

                <label> samotnym matkom
                    <input type='checkbox'
                           name='matkom'
                           value={inputsValue.matkom}
                           checked={inputsValue.matkom}
                           onChange={handleChagne}/>
                </label>

                <label>bezdomnym
                    <input type='checkbox'
                           name='bezdomnym'
                           value={inputsValue.bezdomnym}
                           checked={inputsValue.bezdomnym}
                           onChange={handleChagne}/>
                </label>

                <label> niepełnosprawnym
                    <input type='checkbox'
                           name='niepelnosprawnym'
                           value={inputsValue.niepelnosprawnym}
                           checked={inputsValue.niepelnosprawnym}
                           onChange={handleChagne}/>
                </label>

                <label> osobom starszym
                    <input type='checkbox'
                    name= 'starszym'
                    value={inputsValue.starszym}
                    checked={inputsValue.starszym}
                    onChange={handleChagne}/>
                   </label>
                <h3>wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input type='text'
                name = 'organisationName'
                value = {inputsValue.organisationName}
                onChange= {handleChagne}/>
            </div>
            <button onClick={handleDecrease}>wstecz</button>
            <button onClick={handleIncrease}>dalej</button>
        </>

    );
};

export default OddajRzeczyLocalisation;