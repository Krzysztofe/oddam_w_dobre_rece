import React from 'react';
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajSummary from "../OddajForms/OddajSummary";


const OddajContainerSummary = () => {

    return (

            <main className="wrapper wrapper--oddajMain">
                <div className="belt__empty"></div>
                <OddajFormTop
                    text={['i', 'podsumowanie twojej darowizny']}/>
                <OddajSummary/>
            </main>
    );
};

export default OddajContainerSummary;