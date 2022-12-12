import React from 'react';
import OddajFormTop from "../OddajFormTop";
import OddajThanx from "../oddajContext/OddajThanx";
import TitleDecor from "../../../components/TitleDecor";
import {Link} from "react-router-dom";
import {resetCounter} from "../../../redux/storeFeatures/counterSlice";
import {useDispatch} from "react-redux";

const OddajContainerThnx = () => {

    const dispatch = useDispatch()

    return (
        <main className="wrapper wrapper--oddajMain">
            <div className="belt__empty"></div>

            <OddajFormTop
                text={['i', '']}/>

            <OddajThanx>
                <TitleDecor text={['dziękujemy za przesłanie formularza',
                    'na maila prześlemy wszelkie informacje o odbiorze']}
                            classContainer={'oddajThnx__container'}
                            classH2={'oddajThnx__h2'}
                            classUnderline={'oddajThnx__decoration'}/>

                <Link to='/' className='ddajThanx__link'>
                    <button className='ddajThanx__button'
                    onClick={()=> dispatch(resetCounter())}>
                        strona główna
                    </button>
                </Link>
            </OddajThanx>
        </main>
    );
};

export default OddajContainerThnx;