import React from 'react';
import HeaderUnderline from "../../HeaderUnderline";
import OddajSquare from "./OddajSquare";

const OddajHeader = ({counter}) => {
    return (
        <header className='wrapper wrapper--oddajHeader'>
            <div className="oddajHeader__backgroundImage"></div>

            <aside className="oddajHeader__rightContainer">
                <HeaderUnderline
                    text1={'oddaj rzeczy, których nie chcesz'}
                    text2={'potrzebującym'}
                    classContainer={'oddajHeader__headerUnderlineContainer'}
                    classH2={'oddajHeaders__headerUnderlineH2'}
                    classUnderline={'oddajHeader__headerUnderline'}
                />
                <h2 className='oddajHeader__h2'> wystarczą 4 proste kroki </h2>

                <div className="oddajHeader__squares">
                    <OddajSquare
                        number={'1'}
                        text={'wybierz rzeczy'}
                        counter = {counter}/>
                    <OddajSquare
                        number={'2'}
                        text={'spakuj je w worki'}
                        counter = {counter}/>
                    <OddajSquare
                        number={'3'}
                        text={'wybierz fundację'}
                        counter = {counter}/>
                    <OddajSquare
                        number={"4"}
                        text={'zamów kuriera'}
                        counter = {counter}/>
                    <OddajSquare
                        number={'*'}
                        text={'zamów kuriera'}/>
                </div>
            </aside>
        </header>
    );
};

export default OddajHeader;