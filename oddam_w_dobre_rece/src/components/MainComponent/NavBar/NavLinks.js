import React from 'react';
import {HashLink} from "react-router-hash-link";
import {NavHashLink} from 'react-router-hash-link';
import auth from '../../FirebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from "react-router";


// import {motion} from 'framer-motion'

const NavLinks = ({handleCloseMenue}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    return (
        <>
            <ul className='listItems'>
                <HashLink
                    smooth to='#start'
                    className='hashLink'
                    activeclassname={{color: 'red'}}
                >
                    <li
                        className='listItem'
                        onClick={handleCloseMenue}
                    >
                        start
                    </li>
                </HashLink>

                <HashLink
                    smooth to='#simpleSteps'
                    className='hashLink'
                    activeclassname={{color: 'red'}}
                >
                    <li
                        className='listItem'
                        onClick={handleCloseMenue}
                    >
                        o co chodzi
                    </li>
                </HashLink>

                <HashLink
                    smooth to='#aboutUs'
                    className='hashLink'
                    activeclassname={{color: 'red'}}
                >
                    <li
                        className='listItem'
                        onClick={handleCloseMenue}
                    >
                        o nas
                    </li>
                </HashLink>

                <HashLink
                    smooth to='#whoWeHelp'
                    className='hashLink'
                    activeclassname={{color: 'red'}}
                >
                    <li
                        className='listItem'
                        onClick={handleCloseMenue}
                    >
                        fundacja i organizacje
                    </li>
                </HashLink>

                <HashLink
                    smooth to='#contact'
                    className='hashLink'
                >
                    <li
                        className='listItem'
                        onClick={handleCloseMenue}
                    >
                        kontakt
                    </li>
                </HashLink>
            </ul>
            {user?.email
                ?
                <ul className='logListItems'>
                    <li
                        className='listItem logListItem'
                        onClick={() => {
                            auth.signOut();
                            navigate('/wylogowano');
                            handleCloseMenue();
                        }}
                    >
                        wyloguj
                    </li>

                    <NavHashLink
                        to='oddajRzeczy' className='hashLink'
                    >
                        <li
                            className='listItem logListItem'
                            onClick={handleCloseMenue}
                        >
                            oddaj rzeczy
                        </li>
                    </NavHashLink>
                    <li
                        className='listItem logListItem'
                    >
                        cześć {user?.email}
                    </li>
                </ul>
                :
                <ul className='logListItems'>
                    <NavHashLink
                        to="/rejestracja"
                        className='hashLink'
                    >
                        <li
                            className='listItem logListItem'
                            onClick={handleCloseMenue}
                        >
                            załóż konto
                        </li>
                    </NavHashLink>

                    <NavHashLink
                        to="/logowanie"
                        className='hashLink'
                    >
                        <li
                            className='listItem logListItem'
                            onClick={handleCloseMenue}
                        >
                            zaloguj się
                        </li>
                    </NavHashLink>
                </ul>
            }
        </>
    );
};

export default NavLinks;