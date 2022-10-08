const Buttons = ({handleDecrease, handleIncrease}) => {
    return (
        <div className="formButtons">
            <button onClick={handleDecrease}
                    className='formButton'>
                wstecz
            </button>
            <button onClick={handleIncrease}
                    className='formButton oddajForm__button--form2'>
                dalej
            </button>
        </div>
    );
};

export default Buttons;