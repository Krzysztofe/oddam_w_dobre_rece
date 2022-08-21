import React from 'react';

const ThreeColumns = () => {
    return (

        <section className='threeColumns'>
            <div className="wrapper wrapper--threeColumns">
                <div className="threeColumns__columnContainer">
                    <div className='threeColumns__number'> 1</div>
                    <div id='simpleSteps' className="threeColumns__subtitle">oddanych worków</div>
                    <p className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cum delectus dolorum ducimus
                        laborum minima omnis porro quis veritatis!</p>
                </div>
                <div className="threeColumns__columnContainer">
                    <div className='threeColumns__number'> 2</div>
                    <div className="threeColumns__subtitle">wspartych organizacji</div>
                    <p className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cum delectus dolorum ducimus
                        laborum minima omnis porro quis veritatis!</p>
                </div>
                <div className="threeColumns__columnContainer">
                    <div className='threeColumns__number'> 3</div>
                    <div className="threeColumns__subtitle">zorganizowanych zbiórek</div>
                    <p className="threeColumns__text">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cum delectus dolorum ducimus
                        laborum minima omnis porro quis veritatis!</p>
                </div>
            </div>
        </section>

    );
};

export default ThreeColumns;