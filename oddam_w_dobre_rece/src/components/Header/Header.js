import React from 'react';
import NavBar from "../NavBar/NavBar";
import Underline from "../Underline";
import ThreeColumns from "./ThreeColumns";

const Header = () => {
    return (

        <header className='header'>
            <div className='empty'id = 'start'> </div>
            <div className="wrapper wrapper--header" >
                {/*<NavBar/>*/}

                <aside className='header__right'>
                    <h1  className =  'header__h1' >zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Underline/>
                    <div className='btn_container'>
                        <button className="btnBig">oddaj <br/> rzeczy</button>
                        <button className="btnBig">zorganizuj <br/> zbiórkę</button>
                    </div>
                  <ThreeColumns/>
                </aside>
            </div>
        </header>
    )
};

export default Header;