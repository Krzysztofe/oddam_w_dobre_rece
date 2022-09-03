import Underline from "../Underline";
import {Link} from "react-router-dom";
import HeaderUnderline from "../../Title";

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="wrapper wrapper--header">
                    <div
                        className='empty'
                        id='start'
                    ></div>
                    <div className="header__image"></div>
                    {/*<img className='header__image' src={HeaderImage} alt="Bambetle"/>*/}
                    <aside className='header__right'>

                        <section className="header__container">
                            <HeaderUnderline
                                text1={'zacznij pomagać!'}
                                text2={'oddaj niechciane rzeczy' +
                                    ' w zaufane ręce'}
                                classH2 = {'header__h2'}
                            />

                            <div className='btn_container'>
                                <Link to='logowanie'
                                      className="btnBig">
                                    <button>oddaj <br/>
                                        rzeczy
                                    </button>
                                </Link>

                                <Link to='logowanie'
                                      className="btnBig">
                                    <button> zorganizuj <br/>
                                        zbiórkę
                                    </button>
                                </Link>

                            </div>
                        </section>
                    </aside>
                </div>
            </header>
        </>
    )
};

export default Header;