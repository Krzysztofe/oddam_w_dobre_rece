import Buttons from "../../Buttons";
import InputSelect from "./InputSelect";

const OddajForm2 = ({
                        inputsValue, setInputsValue,
                        handleDecrease, handleIncrease,
                      createSummary
                    }) => {

    const propsHandleIncrease = (e) => {
        typeof handleIncrease === 'function' && handleIncrease(e)
    }

    const propsHandleDecrease = (e) => {
        typeof handleDecrease === 'function' && handleDecrease(e)
    }
    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    return (
        <>
            <main className='oddajForm__inputs'>

                <InputSelect textLabel={'Liczba 60 l. worków:'}
                             array={[1, 2, 3, 4, 5, 6]}
                             inputsValueKey={inputsValue.selectBags}
                             handleSelect={handleSelect}/>

                <Buttons handleDecrease={propsHandleDecrease}
                         handleIncrease={propsHandleIncrease}/>

            </main>
        </>
    );
};

export default OddajForm2;