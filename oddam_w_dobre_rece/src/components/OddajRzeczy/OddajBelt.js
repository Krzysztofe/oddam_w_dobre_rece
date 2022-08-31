import React from 'react';

const OddajBelt = ({text}) => {
    return (
        <section className='wrapper wrapper--belt'>
            <h2 className= 'belt__h2'>ważne!</h2>
            <p className="belt__p">{text}</p>
        </section>
    );
};

export default OddajBelt;