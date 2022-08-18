import React from 'react';
import NavBar from "./NavBar/NavBar";
import Underline from "./Underline";

const Header = () => {
    return (
        <header className='header'>
            <div className="wrapper wrapper--header">
                <NavBar/>
                <h1>zacznij pomagać!<br/>oddaj niechciane rzeczy w zaufane ręce</h1>
            <Underline/>
            </div>
        </header>


    )

};

export default Header;