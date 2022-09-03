import React from 'react';

const Title = ({
                   text1, text2,
                   classContainer,
                   classH2,
                   classUnderline
               }) => {
    return (
        <div className={classContainer}>
            <h2 className={`title__h2 ${classH2}`}>{text1} <br/>{text2}</h2>
            <div className={`title__decoration ${classUnderline}`}></div>
        </div>
    );
};

export default Title;