import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../../../data/FireBaseConfig';
const HeaderImageSmall = require('../../../asets/Hero Image.png')
const HeaderImageLarge = require('../../../asets/Hero Image@2x.png')


interface Props{
    children: React.ReactNode
}

const Header:FC <Props> = ({children}) => {

    const [user] = useAuthState(auth);

    return (
        <>
            <div className='headerSpacer' id='start'></div>
            <header className="wrapper wrapper--header">
                <img src={HeaderImageSmall}
                     alt="rzeczy do oddania"
                     className='header__imageSmall'/>
                <img src={HeaderImageLarge}
                     alt="rzeczy do oddania"
                     className='header__imageSmallLarge'/>

                <aside className='header__right'>

                    {children}

                    {user?.email ?
                        <div className='header__btns' id='simpleSteps'>
                            <Link to='oddaj' className='header__link'>
                                <button className="btnLarge header__btn">
                                    oddaj <br/> rzeczy
                                </button>
                            </Link>

                            <Link to='oddaj' className='header__link'>
                                <button className="btnLarge header__btn">
                                    zorganizuj <br/> zbiórkę
                                </button>
                            </Link>
                        </div>
                        :
                        <div className='header__btns' id='simpleSteps'>
                            <Link to='logowanie' className='header__link'>
                                <button className="btnLarge header__btn">
                                    oddaj <br/> rzeczy
                                </button>
                            </Link>

                            <Link to='logowanie' className='header__link'>
                                <button className="btnLarge header__btn">
                                    zorganizuj <br/> zbiórkę
                                </button>
                            </Link>
                        </div>
                    }
                </aside>
            </header>
        </>
    );
};

export default Header;