import React from 'react';
import OddajFormTop from "../OddajForms/OddajFormTop";
import OddajThanx from "../OddajForms/OddajThanx";
import Title from "../../Title";
import {Link} from "react-router-dom";

const OddajContainerThnx = () => {
    return (
        <main className="wrapper wrapper--oddajMain">
            <div className="belt__empty"></div>

            <OddajFormTop
                text={['i', '']}/>

            <OddajThanx>
                <Title text={['dziękujemy za przesłanie formularza',
                    'na maila prześlemy wszelkie informacje o odbiorze']}
                       classContainer={'oddajThnx__container'}
                       classH2={'oddajThnx__h2'}
                       classUnderline={'oddajThnx__decoration'}/>

                <Link to='/' className='ddajThanx__link'>
                    <button className='ddajThanx__button'>
                        strona główna
                    </button>
                </Link>
            </OddajThanx>
        </main>
    );
};

export default OddajContainerThnx;