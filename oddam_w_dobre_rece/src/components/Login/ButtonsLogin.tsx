import React, {FC} from 'react'
import {Link} from 'react-router-dom'

interface Props{
    link: string;
    btnRight: string;
    btnLeft: string
}

const ButtonsLogin:FC<Props> = ({link, btnRight, btnLeft}) => {
    return (

        <div className="buttonsLogin">

            <Link to={link}>
                <button className='buttonLogin'>
                    {btnRight}
                </button>
            </Link>

            <button type='submit'
                    className='buttonLogin'>
                {btnLeft}
            </button>

        </div>
    );
};

export default ButtonsLogin;