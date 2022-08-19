import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
// import {motion} from 'framer-motion'

const NavLinks = ({handleCloseMenue}) => {
    return (
        <>
            <ul className='listItems'>

                <Link smooth to='#start'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>start</li>
                </Link>

                <Link smooth to='#simpleSteps'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>o co chodzi</li>
                </Link>

                <Link smooth to='#aboutUs'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>o nas</li>
                </Link>

                <Link smooth to='#whoWeHelp'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>fundacja i organizacje</li>
                </Link>

                <Link smooth to='#contact'
                      className='link'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>kontakt</li>
                </Link>
            </ul>

            <ul className='logListItems'>
                <li className='listItem logListItem'>zaloguj</li>
                <li className='listItem logListItem'>załuż konto</li>
            </ul>

        </>
    )
        ;
};

export default NavLinks;