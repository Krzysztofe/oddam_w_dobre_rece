import React from 'react';
import {HashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom'
import {auth} from '../../FireBaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from "react-router";

const NavLinks = ({handleCloseMenue}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut();
        navigate('/wylogowano');
        handleCloseMenue();
    }

    return (
        <>
            <ul className='listItems'>

                <HashLink
                    smooth to='#start'
                    className='hashLink'>
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
                <ul className='logItems'>
                    <li
                        className='listItem logItem'
                        onClick={handleLogout}
                    >
                        wyloguj
                    </li>

                    <Link to='oddajRzeczy' className='hashLink'
                    >
                        <li
                            className='listItem logItem'
                            onClick={handleCloseMenue}
                        >
                            oddaj rzeczy
                        </li>
                    </Link>
                    <li className='listItem logItem'
                    >
                        cześć {user?.email}
                    </li>
                </ul>
                :
                <ul className='logItems'>
                    <Link
                        to="/rejestracja"
                        className='hashLink'
                    >
                        <li
                            className='listItem logItem'
                            onClick={handleCloseMenue}
                        >
                            załóż konto
                        </li>
                    </Link>

                    <Link
                        to="/logowanie"
                        className='hashLink'
                    >
                        <li
                            className='listItem logItem'
                            onClick={handleCloseMenue}
                        >
                            zaloguj się
                        </li>
                    </Link>
                </ul>
            }
        </>
    );
};

export default NavLinks;