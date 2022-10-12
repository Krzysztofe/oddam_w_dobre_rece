import Buttons from "../../Buttons";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import OddajSummaryTable from "./OddajSummaryTable";

const OddajSummary = () => {

    const {inputsValue} = useContext(GlobalContext)

    return (
        <section className='oddajForm__inputs'>
            <h3 className='summary__h3'>oddajesz:</h3>

            <div className="summary__topContainer">
                <div className="summary__icon1"></div>
                <p className='summary__p'>{inputsValue.selectBags} worków
                    <> {inputsValue.selectStuff}</>
                    {inputsValue.dzieciom ? <>, dzieciom</> : null}
                    {inputsValue.matkom ? <>, samotnym matkom</> : null}
                    {inputsValue.bezdomnym ? <>, bezdomnym</> : null}
                    {inputsValue.niepelnosprawnym ? <>, niepełnosprawnym</> : null}
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
            <OddajSummaryTable/>
            <Buttons/>
        </section>
    );
};

export default OddajSummary;