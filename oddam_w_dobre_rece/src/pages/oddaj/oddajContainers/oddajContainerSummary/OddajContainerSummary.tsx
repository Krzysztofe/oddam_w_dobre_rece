import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import OddajSummary from "./oddajSummary/OddajSummary";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper";

const OddajContainerSummary = () => {

    return (

        <main className="wrapper wrapper--oddajMain">
            <div className="belt__empty"></div>
            <OddajFormTop
                text={['i', 'podsumowanie twojej darowizny']}/>
            <OddajFormWrapper>
                <OddajSummary/>
            </OddajFormWrapper>
        </main>
    );
};

export default OddajContainerSummary;