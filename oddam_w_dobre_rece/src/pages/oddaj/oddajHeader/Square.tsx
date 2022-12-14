import React, {FC} from 'react'

interface Props{
    number:number;
    text: string
}

const Square:FC<Props>= ({number, text}) => {

    return (
        <>
            <div className='square square--BacgroundColor'>
                <div className="square__text">
                    <h3 className='square__h3'>
                        {number}
                    </h3>
                    <p className='square__p'>
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Square;
