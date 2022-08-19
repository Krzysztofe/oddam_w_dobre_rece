import React from 'react';

const ThreeColumns = () => {
    return (
        <div>
            <div className='threeColumns' >
                <div className="threeColumns__columnContainer" >
                    <div className='threeColumns__number'> 1 </div>
                    <div id = 'simpleSteps' className="threeColumns__subtitle">oddanych worków</div>
                    <p  className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis cupiditate fuga ipsam magnam minima molestiae neque nulla velit?</p>
                </div>
                <div className="threeColumns__columnContainer">
                    <div className='threeColumns__number'> 2 </div>
                    <div className="threeColumns__subtitle">wspartych organizacji</div>
                    <p className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis cupiditate fuga ipsam magnam minima molestiae neque nulla velit?</p>
                </div>
                <div className="threeColumns__columnContainer">
                    <div className='threeColumns__number'> 3 </div>
                    <div className="threeColumns__subtitle">zorganizowanych zbiórek worków</div>
                    <p className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis cupiditate fuga ipsam magnam minima molestiae neque nulla velit?</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeColumns;