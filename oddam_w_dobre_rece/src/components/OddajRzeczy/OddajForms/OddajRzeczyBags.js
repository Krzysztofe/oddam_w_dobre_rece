import React from 'react';
import {Link} from "react-router-dom";

const OddajRzeczyBags = ({inputsValue, handleChange,
                             handleDecrease, handleIncrease
                         }) => {
    return (
        <main className='wrapper wrapper--oddaj'>
            <p>krok 2/4</p>
            <h2>podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h2>

            <form>
                <label>liczba 60l worków </label>
                <select name='selectBags'
                        value={inputsValue.selectBags}
                        onChange={handleChange}
                >
                    <option value=''> wybierz</option>
                    <option value='1'> 1</option>
                    <option value='2'> 2</option>
                    <option value='3'> 3</option>
                    <option value='4'> 4</option>
                    <option value='5'> 5</option>
                </select>
            </form>




            <button onClick={handleDecrease}>wstecz</button>
            <button onClick={handleIncrease}>dalej</button>
        </main>
    );
};

export default OddajRzeczyBags;