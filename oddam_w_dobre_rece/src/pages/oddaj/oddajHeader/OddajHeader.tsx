import React from 'react'
import TitleDecor from "../../../components/titleDecor/TitleDecor";
import Square from "./Square";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const ImageSmall = require("../../../asets/Header-Form-Background.png")
const ImageLarge = require('../../../asets/Header-Form-Background@2x.png')

const OddajHeader = () => {

    const counter = useSelector((state: RootState) => state.btnCounter.value)

    return (
        <>
            <div className='headerSpacer'></div>
            <header className='wrapper wrapper--oddajHeader'>
                <img src={ImageSmall} alt='sweter' className='oddajHeader__imgSmall'/>
                <img src={ImageLarge} alt='sweter' className='oddajHeader__imgLarge'/>
                <aside className="oddajHeader__rightContainer">

                    <TitleDecor text={["oddaj rzeczy, których nie chcesz", "potrzebującym"]}
                                classContainer={'oddajHeader__titleContainer'}
                                classH2={'oddajHeader__titleH2'}
                                classUnderline={'oddajHeader__titleDecoration'}/>

                    <p className='oddajHeader__p'> wystarczą 4 proste kroki </p>

                    <div className="squares">

                        <Square number={1}
                                text='wybierz rzeczy'/>

                        <Square number={2}
                                text='spakuj w worki'/>

                        <Square number={3}
                                text='wybierz fundację'/>

                        <Square number={4}
                                text='zamów kuriera'/>

                    </div>
                </aside>
            </header>
        </>
    );
};

export default OddajHeader;