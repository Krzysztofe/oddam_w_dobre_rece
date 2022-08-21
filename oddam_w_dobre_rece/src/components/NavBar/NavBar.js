import React from 'react';
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

const NavBar = () => {
    return (
        <>
            <div className='wrapper'>
                <Navigation/>
            </div>
                <NavigationMobile/>
        </>

    );
};

export default NavBar;