import React from 'react';

const Square = ({number, text, counter}) => {

    return (
        <>
            <div className={`square 
            ${counter >= number 
            &&
            'square--BacgroundColor'}`}>

                <h3 className= 'square__h3'
                >
                    {number}
                </h3>
                <p className='square__p'>{text}</p>
            </div>
        </>
    );
};

export default Square;