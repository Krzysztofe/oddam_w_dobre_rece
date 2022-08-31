import React from 'react';

const HeaderUnderline = ({
                             text1, text2,
                             classContainer,
                             classH2,
                             classUnderline
                         }) => {
    return (
        <div className={classContainer}>
            <h2 className={`headerUnderline__h2 ${classH2}`}>{text1} <br/>{text2}</h2>
            <div className={`headerUnderline__underline ${classUnderline}`}> </div>
        </div>
    );
};

export default HeaderUnderline;