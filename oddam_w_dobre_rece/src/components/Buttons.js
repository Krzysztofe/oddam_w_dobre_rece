const Buttons = ({handleDecrease, handleIncrease, createSummary}) => {
    return (

            <div className="formButtons">
                <button onClick={handleDecrease}
                        className='formButton'>
                    wstecz
                </button>
                <button onClick={e => {handleIncrease(); createSummary()}}
                        className='formButton oddajForm__button--form2'>
                    dalej
                </button>
        </div>
    );
};

export default Buttons;