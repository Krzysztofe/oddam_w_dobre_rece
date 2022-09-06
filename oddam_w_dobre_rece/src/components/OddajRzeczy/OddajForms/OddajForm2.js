import Buttons from "../../Buttons";

const OddajForm2 = ({
                        inputsValue, handleChange,
                        handleDecrease, handleIncrease
                    }) => {
    return (
        <>
            <main className='oddajForm2__inputs'>
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

<Buttons
    handleDecrease={handleDecrease}
    handleIncrease = {handleIncrease}
/>
            </main>
        </>
    );
};

export default OddajForm2;