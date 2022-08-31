import React from 'react';

const OddajRzeczySummary = ({inputsValue, createSummary,
                                handleIncrease, handleDecrease}) => {
    const handleSummIncrease = () => {
        handleIncrease();
        createSummary()
    }


    return (
        <div>
            <section>
                <h2>podsumowanie twojej darowizny</h2>
                <h3>oddajesz:</h3>

                <p>{inputsValue.selectBags} worki,
                    {inputsValue.selectStuff},
                    {inputsValue.dzieciom === false ? null : <>dzieciom, </>}
                    {inputsValue.matkom === false ? null : <> matkom</>}
                    {inputsValue.bezdomnym === false ? null : <>bezdomnym</>}
                    {inputsValue.niepelnosprawnym === false ? null : <>niepełnosprawnym</>}
                    {inputsValue.starszym === false ? null : <>starszym</>}
                </p>

                <p>dla lokalizacji: {inputsValue.localisation}</p>

                <h3>adres odbioru</h3>
                <p> ulica: {inputsValue.street}</p>
                <p> miasto: {inputsValue.city}</p>
                <p> kod pocztowy: {inputsValue.postCode}</p>
                <p> numer telefonu: {inputsValue.phone}</p>


                <h3>termin odbioru</h3>
                <p> data: {inputsValue.date}</p>
                <p> godzina: {inputsValue.time}</p>
                <p> uwagi dla kuriera: {inputsValue.note}</p>


                <button onClick={handleDecrease}>wstecz</button>
                <button onClick={handleSummIncrease}>potwierdzam</button>
            </section>
        </div>
    );
};

export default OddajRzeczySummary;