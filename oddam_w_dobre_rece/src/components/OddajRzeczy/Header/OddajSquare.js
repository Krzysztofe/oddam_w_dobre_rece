import React from 'react';

const OddajSquare = ({number, text, counter}) => {

    return (
        <>
            <div className="square">
                <h3 className = {
                    `square__h3 ${counter == number 
                    && 
                    'square__h3--BacgroundColor'} `}
                >
                {number}</h3>
                <p className='square__p'>{text}</p>
            </div>
        </>
    );
};

export default OddajSquare;