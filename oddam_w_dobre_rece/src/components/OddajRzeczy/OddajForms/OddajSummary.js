import OddajFormTop from "./OddajFormTop";
import Buttons from "../../Buttons";

const OddajSummary = ({
                          inputsValue, createSummary,
                          handleIncrease, handleDecrease
                      }) => {
    const handleSummaryIncrease = () => {
        handleIncrease();
        createSummary()
    }

    return (
        <>
        <div>
            <section className='oddajForm__inputs'>
                <h3 className='summary__h3'>oddajesz:</h3>

                <div className="summary__topContainer">
                    <div className="summary__icon1"> </div>
                    <p className='summary__p'>{inputsValue.selectBags} worki
                        <>{inputsValue.selectStuff}</>
                        {inputsValue.dzieciom ? <>, dzieciom</> : null }
                        {inputsValue.matkom ? <>, samotnym matkom</> : null }
                        {inputsValue.bezdomnym ? <>, bezdomnym</> : null }
                        {inputsValue.niepelnosprawnym ? <>, niepełnosprawnym</> : null }
                        {inputsValue.starszym ? <>, osobom starszym</> : null}
                    </p>
                </div>

                <div className="summary__topContainer">
                    <div className="summary__icon2"></div>
                    <p className='summary__p'>
                        dla lokalizacji: {inputsValue.selectLocalisation}
                        <> {inputsValue.organisationName}</>
                    </p>
                </div>

                <div className="summary__tablesContainer">
                <table className="summary__tableLeft">
                    <thead>
                    <tr>
                        <td className='summary__thead'>adres odbioru</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='summary__td'> ulica:</td>
                        <td className='summary__td'>{inputsValue.street}</td>
                    </tr>
                    <tr>
                        <td className='summary__td'> miasto:</td>
                        <td className='summary__td' >{inputsValue.city}</td>
                    </tr>
                    <tr>
                        <td className='summary__td'> kod pocztowy:</td>
                        <td className='summary__td'>{inputsValue.postCode}</td>
                    </tr>
                    <tr>
                        <td className='summary__td'> numer telefonu:</td>
                        <td className='summary__td'>{inputsValue.phone}</td>
                    </tr>
                    </tbody>

                </table>

                <table className="summary__tableRight">
                    <thead>
                    <tr>
                        <td className='summary__thead'>termin odbioru</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='summary__td'> data:</td>
                        <td className='summary__td' >{inputsValue.date}</td>
                    </tr>
                    <tr>
                        <td className='summary__td'> godzina:</td>
                        <td className='summary__td' >{inputsValue.time}</td>
                    </tr>
                    <tr>
                        <td className='summary__td'> uwagi do kuriera:</td>
                        <td className='summary__td'>{inputsValue.note}</td>
                    </tr>
                    </tbody>
                </table>
        </div>

                <Buttons
                    handleDecrease = {handleDecrease}
                    handleIncrease = {handleSummaryIncrease}
                />

            </section>
        </div>
</>
    );
};

export default OddajSummary;