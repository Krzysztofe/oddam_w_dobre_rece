import React from 'react';
import NavBar from "../NavBar/NavBar";
import HeaderImage from '../../../asets/Hero Image.png'
import Underline from "../Underline";
import ThreeColumns from "../ThreeColumns";
import {Link} from "react-router-dom";

const Header = () => {
    return (
<>
        <header className='header'>
            <div className="wrapper wrapper--header" >
                <div className='empty'
                     id = 'start'> </div>
                <div className="header__image"> </div>
                {/*<img className='header__image' src={HeaderImage} alt="Bambetle"/>*/}
                <aside className='header__right'>

                    <section className="header__container">
                        <h1  className = 'header__h1' >
                            zacznij pomagać!<br/>
                            Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <Underline/>
                        <div className='btn_container'>
                            <Link to = 'logowanie'
                                  className="btnBig">
                                <button >oddaj <br/>
                                    rzeczy</button>
                            </Link>

                            <Link to = 'logowanie'
                                         className="btnBig"  >
                            <button >   zorganizuj <br/>
                                zbiórkę </button>
                            </Link>
                        </div>
                    </section>

                    {/*<ThreeColumns/>*/}
                </aside>
            </div>
        </header>
    </>
    )
};

export default Header;