import React from 'react';
import {Link} from "react-router-dom";

const OddajForm2 = ({
                        inputsValue, handleChange,
                        handleDecrease, handleIncrease
                    }) => {
    return (
        <>
            <form className='oddajForm2__inputsContainer'>
                <label className='oddajForm2__label'>
                    liczba 60l worków:

                    <select name='selectBags'
                            value={inputsValue.selectBags}
                            onChange={handleChange}
                            className="oddajForm2__select">

                        <option value=''> wybierz</option>
                        <option value='1'> 1</option>
                        <option value='2'> 2</option>
                        <option value='3'> 3</option>
                        <option value='4'> 4</option>
                        <option value='5'> 5</option>
                    </select>
                </label>

                <div className="oddajForm2__buttonsContainer">
                    <button onClick={handleDecrease}
                        className='oddajForm2__button'>
                        wstecz
                    </button>
                    <button onClick={handleIncrease}
                        className='oddajForm2__button'>
                        dalej
                    </button>
                </div>
            </form>
        </>
    );
};

export default OddajForm2;