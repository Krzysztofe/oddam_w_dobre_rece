import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import useInputRef from "../../hooks/useInputRef";

interface Props{
    link: string;
    btnRight: string;
    btnLeft: string
    inputFocus: ()=>void
}

const ButtonsLogin:FC<Props> = ({
                                    link,
                                    btnRight,
                                    btnLeft,
                                    inputFocus}) => {



    return (
        <div className="buttonsLogin">

            <Link to={link}>
                <button className='buttonLogin'>
                    {btnLeft}

                </button>
            </Link>

            <button type='submit'
                    onClick={inputFocus}
                    className='buttonLogin'>
                {btnRight}
            </button>

        </div>
    );
};

export default ButtonsLogin;