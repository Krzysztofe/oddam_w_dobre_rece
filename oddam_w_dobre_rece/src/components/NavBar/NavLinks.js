import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
// import {motion} from 'framer-motion'

const NavLinks = ({handleCloseMenue}) => {
    return (
        <>
            <ul className='listItems'>
                <li className='listItem'>start</li>

                <Link smooth to='#aboutUs'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>o co chodzi</li>
                </Link>

                <li className='listItem'
                    onClick={handleCloseMenue}>o nas</li>

                <li className='listItem'
                    onClick={handleCloseMenue}>fundacja i organizacje</li>

                <li className='listItem'
                    onClick={handleCloseMenue}>kontakt</li>
            </ul>

            <ul className='logListItems'>
                <li className='logListItem'>zaloguj</li>
                <li className='logListItem'>załuż konto</li>
            </ul>

        </>
    )
        ;
};

export default NavLinks;