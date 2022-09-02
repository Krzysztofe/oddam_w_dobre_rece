import React from 'react';

const OddajForm3 = ({
                        handleChange, inputsValue,
                        handleIncrease, handleDecrease
                    }) => {
    return (
        <>
            <form className='oddajForm3__inputsContainer'>
                <select
                    name='selectLocalisation'
                    value={inputsValue.selectLocalisation}
                    onChange={handleChange}
                    className='oddajForm3__select'
                >
                    <option value='wybierz'>wybierz</option>
                    <option value='Poznań'>poznań</option>
                    <option value='Warszawa'>warszawa</option>
                    <option value='Kraków'>kraków</option>
                    <option value='Wrocław'>wrocław</option>
                </select>
                <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>
                <div className="oddajForm3__checkboxesContainer">


                    <label className='oddajForm3__label'>
                        <div className = 'oddajForm3__emptyCheckbox'> dzieciom</div>
                        <input type='checkbox'
                               name='dzieciom'
                               value={inputsValue.dzieciom}
                               checked={inputsValue.dzieciom}
                               onChange={handleChange}
                        className='oddajForm3__checkbox'/>
                </label>

                    <label className='oddajForm3__label'>
                        <div className = 'oddajForm3__emptyCheckbox'> samotnym matkom</div>
                        <input type='checkbox'
                               name='matkom'
                               value={inputsValue.matkom}
                               checked={inputsValue.matkom}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>

                </label>
                    <label className='oddajForm3__label'>
                    <div className = 'oddajForm3__emptyCheckbox'> bezdomnym</div>

                    <input type='checkbox'
                               name='bezdomnym'
                               value={inputsValue.bezdomnym}
                               checked={inputsValue.bezdomnym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                </label>

                    <label className='oddajForm3__label'>
                        <div className = 'oddajForm3__emptyCheckbox'> niepełnosprawnym</div>

                        <input type='checkbox'
                               name='niepelnosprawnym'
                               value={inputsValue.niepelnosprawnym}
                               checked={inputsValue.niepelnosprawnym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                </label>

                    <label className='oddajForm3__label'>
<div className = 'oddajForm3__emptyCheckbox'> osobom starszym</div>
                        <input type='checkbox'
                               name='starszym'
                               value={inputsValue.starszym}
                               checked={inputsValue.starszym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                    </label>
                </div>
                <h3 className='oddajForm3__h3'>
                    wpisz nazwę konkretnej organizacji (opcjonalnie)
                </h3>
                <div className="oddajForm3__selectContainer">

                    <input type='text'
                           name='organisationName'
                           value={inputsValue.organisationName}
                           onChange={handleChange}
                    className='oddajForm3__textInput'/>
                </div>

                <div className="oddajForm3__buttonsContainer">
                    <button className='oddajForm3__button'
                            onClick={handleDecrease}>wstecz</button>
                    <button className='oddajForm3__button'
                            onClick={handleIncrease}>dalej</button>
                </div>
            </form>
        </>

    );
};

export default OddajForm3;