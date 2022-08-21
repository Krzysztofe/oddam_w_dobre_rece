import React from 'react';
import {HashLink} from "react-router-hash-link";
import { NavHashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
// import {motion} from 'framer-motion'

const NavLinks = ({handleCloseMenue}) => {
    return (
        <>
            <ul className='listItems'>

                <HashLink smooth to='#start'
                      className='hashLink'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>start</li>
                </HashLink>

                <HashLink smooth to='#simpleSteps'
                      className='hashLink'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>o co chodzi</li>
                </HashLink>

                <HashLink smooth to='#aboutUs'
                      className='hashLink'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>o nas</li>
                </HashLink>

                <HashLink smooth to='#whoWeHelp'
                      className='hashLink'
                      activeclassname={{color: 'red'}}>
                    <li className='listItem'
                        onClick={handleCloseMenue}>fundacja i organizacje</li>
                </HashLink>

                <HashLink smooth to='#contact'
                      className='hashLink'>
                    <li className='listItem'
                        onClick={handleCloseMenue}>kontakt</li>
                </HashLink>
            </ul>

            <ul className='logListItems'>
                <NavHashLink to ="/rejestracja" className='hashLink'>
                    <li className='listItem logListItem'>załóż konto</li>
                </NavHashLink>

                <NavHashLink to="/logowanie" className='hashLink'>
                <li className='listItem logListItem'>zaloguj</li>
                </NavHashLink>
            </ul>

        </>
    )
        ;
};

export default NavLinks;