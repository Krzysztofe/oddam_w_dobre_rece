import React, {FC} from 'react'
import {Typewriter} from 'react-simple-typewriter'


interface Props{
    text:string[]
}

const OddajFormTop:FC<Props> = ({text}) => {

    return (
        <>
            <p className='oddajFormTop__p'>{text[0]}</p>
            <h2 className='oddajFormTop__h2'>
                <Typewriter cursorStyle=''
                    words={[text[1]]}/>
            </h2>

        </>
    );
};

export default OddajFormTop;