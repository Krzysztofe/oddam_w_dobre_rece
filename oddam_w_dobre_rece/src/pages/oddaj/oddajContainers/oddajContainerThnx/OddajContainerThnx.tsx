import React from 'react';
import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import TitleDecor from "../../../../components/titleDecor/TitleDecor";
import {Link} from "react-router-dom";
import {resetCounter} from "../../../../redux/storeFeatures/counterSlice";
import {useDispatch} from "react-redux";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper";

const OddajContainerThnx = () => {

    const dispatch = useDispatch()

    return (
        <main className="wrapper wrapper--oddajMain">
            <div className="belt__empty"></div>

            <OddajFormTop
                text={['i', '']}/>
            <OddajFormWrapper>
                <div className="oddajThnx__container">
                    <TitleDecor text={['dziękujemy za przesłanie formularza',
                        'na maila prześlemy wszelkie informacje o odbiorze']}
                                classContainer='oddajThnx__DecorContainer'
                                classH2='oddajThnx__h2'
                                classUnderline='oddajThnx__decoration'/>

                    <Link to='/' className='ddajThanx__link'>
                        <button className='ddajThanx__button'
                                onClick={()=> dispatch(resetCounter())}>
                            strona główna
                        </button>
                    </Link>
                </div>


            </OddajFormWrapper>
        </main>
    );
};

export default OddajContainerThnx;