import React from 'react';
import Underline from "./Underline";
import Tshirt from '../../asets/IconTshirt.png';
import Bag from '../../asets/IconBag.png';
import Glass from '../../asets/IconLupa.png'
import Arrows from '../../asets/Icon.png'
import {HashLink} from "react-router-hash-link";

const SimpleSteps = () => {
    return (
        <section className='simpleSteps'>
            <div className='wrapper wrapper--simpleSteps'>
                <h2 className='simpleSteps__h2'>wystarczą 4 proste kroki</h2>
                <Underline/>
                <div className="simpleSteps__columnsContainer">
                    <div className="simpleSteps__columnContainer">
                        <img src={Tshirt} className="simpleSteps__logo" alt = 'Tshirt logo'/>
                        <h3 className='simpleSteps__h3'>wybierz rzeczy</h3>
                        <p className="simpleSteps__paragraph">
                        ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <img src={Bag} className="simpleSteps__logo" alt = 'Bagg logo'/>
                        <h3 className='simpleSteps__h3'>spakuj je</h3>
                        <p className="simpleSteps__paragraph">
                        skrzystaj z worków na śmieci</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <img src={Glass} className="simpleSteps__logo" alt = 'Glass logo'/>
                        <h3 className='simpleSteps__h3'>zdecyduj komu chcesz pomóc</h3>
                        <p className="simpleSteps__paragraph">
                        wybierz zaufane miejsce</p>
                    </div>
                    <div className="simpleSteps__columnContainer">
                        <img src={Arrows} className="simpleSteps__logo" alt = 'Arrows logo'/>
                        <h3 className='simpleSteps__h3'>zamów kuriera</h3>
                        <p className="simpleSteps__paragraph">
                        kurier podjedzie w zaufanym terminie</p>
                    </div>
                </div>
                <HashLink to = '/logowanie' className = 'btnBig btnBig--simpleSteps'>
                    <button id = 'whoWeHelp' >oddaj <br/> rzeczy</button>
                </HashLink>
            </div>
        </section>
    );
};

export default SimpleSteps;