import {HashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom'
import {auth} from '../../FireBaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from "react-router";

const NavLinks = ({handleCloseMenu}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const propsCloseMenu = () => {
        if (typeof handleCloseMenu === 'function') {
            return handleCloseMenu()
        }
    }

    const handleLogout = () => {
        auth.signOut();
        navigate('/wylogowano');
        propsCloseMenu();
    }

    return (
        <>
            <ul className='listItems'>
                <Link to='/' className='hashLink'>
                    <li className='listItem'
                        onClick={propsCloseMenu}>
                       strona główna
                    </li>
                </Link>

                <HashLink smooth to='#simpleSteps'
                          className='hashLink'>
                    <li className='listItem'
                        onClick={propsCloseMenu}>
                        o co chodzi
                    </li>
                </HashLink>

                <HashLink smooth to='#aboutUs'
                          className='hashLink'>
                    <li className='listItem'
                        onClick={propsCloseMenu}>
                        o nas
                    </li>
                </HashLink>

                <HashLink smooth to='#whoWeHelp'
                          className='hashLink'>
                    <li className='listItem'
                        onClick={propsCloseMenu}>
                        fundacja i organizacje
                    </li>
                </HashLink>

                <HashLink smooth to='#contact'
                          className='hashLink'>
                    <li className='listItem'
                        onClick={propsCloseMenu}>
                        kontakt
                    </li>
                </HashLink>
            </ul>

            {user?.email
                ?
                <ul className='logItems'>
                    <Link to='' className='hashLink'>
                        <li className='logItem'>
                            cześć {user?.email}
                        </li>
                    </Link>

                    <Link to='oddaj' className='hashLink'>
                        <li className='logItem'
                            onClick={propsCloseMenu}>
                            oddaj rzeczy
                        </li>
                    </Link>

                    <div className='hashLink'>
                        <li className='logItem'
                            onClick={handleLogout}>
                            wyloguj
                        </li>
                    </div>
                </ul>
                :
                <ul className='logItems'>
                    <Link to="/logowanie"
                          className='hashLink'>
                        <li className='logItem'
                            onClick={propsCloseMenu}>
                            zaloguj się
                        </li>
                    </Link>

                    <Link to="/rejestracja"
                          className='hashLink'>
                        <li className='logItem'
                            onClick={propsCloseMenu}>
                            załóż konto
                        </li>
                    </Link>
                </ul>
            }
        </>
    );
};

export default NavLinks;