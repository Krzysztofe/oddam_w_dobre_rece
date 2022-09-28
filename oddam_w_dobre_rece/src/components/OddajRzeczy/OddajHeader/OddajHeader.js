import React from 'react';
import Title from "../../Title";
import Square from "./Square";

const OddajHeader = ({counter}) => {
    return (
        <>
        <div className='headerSpacer'></div>
        <header className='wrapper wrapper--oddajHeader'>
            <aside className="oddajHeader__backgroundImage"> </aside>
            <aside className="oddajHeader__rightContainer">
                <Title
                    text1={'oddaj rzeczy, których nie chcesz'}
                    text2={'potrzebującym'}
                    classContainer={'oddajHeader__titleContainer'}
                    classH2={'oddajHeader__titleH2'}
                    classUnderline={'oddajHeader__titleDecoration'}
                />
                <p className = 'oddajHeader__p'> wystarczą 4 proste kroki </p>

                <div className = "squares">
                    <Square
                        number={'1'}
                        text={'wybierz rzeczy'}
                        counter = {counter}
                    />
                    <Square
                        number={'2'}
                        text={'spakuj je w worki'}
                        counter = {counter}
                    />
                    <Square
                        number={'3'}
                        text={'wybierz fundację'}
                        counter = {counter}
                    />
                    <Square
                        number={"4"}
                        text={'zamów kuriera'}
                        counter = {counter}
                    />
                    <Square
                        number={'5'}
                        text={'zamów kuriera'}
                        counter = {counter}
                    />
                </div>
            </aside>
        </header>
</>
    );
};

export default OddajHeader;