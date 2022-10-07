import Buttons from "../../Buttons";

const OddajForm3 = ({
                        handleChange, inputsValue,
                        handleIncrease, handleDecrease
                    }) => {
    return (
        <>
            <main className='oddajForm__inputs'>

                <select name='selectLocalisation'
                    value={inputsValue.selectLocalisation}
                    onChange={handleChange}
                    className='oddajForm3__select'>

                    <option value='wybierz'>wybierz</option>
                    <option value='Poznań'>poznań</option>
                    <option value='Warszawa'>warszawa</option>
                    <option value='Kraków'>kraków</option>
                    <option value='Wrocław'>wrocław</option>
                </select>

                <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

                <div className="oddajForm3__checkboxes">

                    <label className ='oddajForm3__label'>
                        <input type='checkbox' name='dzieciom'
                               value={inputsValue.dzieciom}
                               checked={inputsValue.dzieciom}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> dzieciom</div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='matkom'
                               value={inputsValue.matkom}
                               checked={inputsValue.matkom}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> samotnym matkom </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='bezdomnym'
                               value={inputsValue.bezdomnym}
                               checked={inputsValue.bezdomnym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> bezdomnym </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='niepelnosprawnym'
                               value={inputsValue.niepelnosprawnym}
                               checked={inputsValue.niepelnosprawnym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> niepełnosprawnym </div>
                    </label>

                    <label className='oddajForm3__label'>
                        <input type='checkbox' name='starszym'
                               value={inputsValue.starszym}
                               checked={inputsValue.starszym}
                               onChange={handleChange}
                               className='oddajForm3__checkbox'/>
                        <div className='oddajForm3__checkboxStyle'> osobom starszym </div>
                    </label>

                </div>

                <h3 className='oddajForm3__h3'>
                    wpisz nazwę konkretnej organizacji (opcjonalnie)
                </h3>

                    <input type='text'
                           name='organisationName'
                           value={inputsValue.organisationName}
                           onChange={handleChange}
                           className='oddajForm3__textInput'/>

                <Buttons handleDecrease={handleDecrease}
                    handleIncrease = {handleIncrease}/>

            </main>
        </>

    );
};

export default OddajForm3;