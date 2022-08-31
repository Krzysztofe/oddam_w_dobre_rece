import React from 'react';

const OddajFormHeader = ({step, text}) => {
    return (
        <>
            <p className='oddaj__p'>{step}</p>
            <h2 className='oddaj__h2'>{text}</h2>

        </>
    );
};

export default OddajFormHeader;