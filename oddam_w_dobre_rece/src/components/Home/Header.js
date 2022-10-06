import {Link} from "react-router-dom";
import Title from "../Title";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../FireBaseConfig";
import HeaderImage from '../../asets/Hero Image@2x.png'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <div className='headerSpacer' id='start'></div>
            <header className="wrapper wrapper--header">
                <img src={HeaderImage}
                     alt="rzeczy do oddania"
                     className='header__image'/>

                <aside className='header__right'>

                    <section className="header__container">
                        <Title
                            text1={'zacznij pomagać!'}
                            text2={'oddaj niechciane rzeczy' +
                                ' w zaufane ręce'}
                            classH2={'header__h2'}/>

                        {user?.email ?
                            <div className='header__btns' id='simpleSteps'>
                                <Link to='oddaj' className='header__link'>
                                    <button className="btnLarge header__btn">
                                        oddaj <br/>
                                        rzeczy
                                    </button>
                                </Link>

                                <Link to='oddaj' className='header__link'>
                                    <button className="btnLarge header__btn">
                                        zorganizuj <br/>
                                        zbiórkę
                                    </button>
                                </Link>
                            </div>
                            :
                            <div className='header__btns' id='simpleSteps'>
                                <Link to='logowanie' className='header__link'>
                                    <button className="btnLarge header__btn">
                                        oddaj <br/>
                                        rzeczy
                                    </button>
                                </Link>

                                <Link to='logowanie' className='header__link'>
                                    <button className="btnLarge header__btn">
                                        zorganizuj <br/>
                                        zbiórkę
                                    </button>
                                </Link>
                            </div>
                        }
                    </section>
                </aside>
            </header>
        </>
    )
};

export default Header;