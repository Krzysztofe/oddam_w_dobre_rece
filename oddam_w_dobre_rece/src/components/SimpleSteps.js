import React from 'react';
import Underline from "./Underline";

const SimpleSteps = () => {
    return (
        <section className='simpleSteps'>
            <div className='wrapper wrapper--simpleSteps'>
                <h2>wystarczą 4 proste kroki</h2>
                <Underline/>
                <div className="simpleSteps__columnsContainer">
                    <div className="simpleSteps__columnContainer">
                        <div className="simpleSteps__tshirt"> </div>
                        <h3>wybierz rzeczy</h3>
                        <p className="simpleSteps__paragraph">
                        ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <div className="simpleSteps__bag"> </div>
                        <h3>spakuj je</h3>
                        <p className="simpleSteps__paragraph">
                        skrzystaj z worków na śmieci</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <div className="simpleSteps__glass"> </div>
                        <h3>zdecyduj komu chcesz pomóc</h3>
                        <p className="simpleSteps__paragraph">
                        wybierz zaufane miejsce</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <div className="simpleSteps__circle"> </div>
                        <h3>zamów kuriera</h3>
                        <p className="simpleSteps__paragraph">
                        kurier podjedzie w zaufanym terminie</p>
                    </div>
                </div>
                <button id = 'whoWeHelp' className ='btnBig btnBig--simpleSteps'>oddaj rzeczy</button>
            </div>
        </section>
    );
};

export default SimpleSteps;