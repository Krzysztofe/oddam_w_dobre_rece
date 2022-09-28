import {Link} from "react-router-dom";
import Title from "../Title";

const Header = () => {

    return (
        <>
            <div className='headerSpacer' id='start'> </div>
                <header className="wrapper wrapper--header">

                    <div className="header__image"></div>
                    {/*<img className='header__image' src={HeaderImage} alt="Bambetle"/>*/}
                    <aside className='header__right'>

                        <section className="header__container">
                            <Title
                                text1={'zacznij pomagać!'}
                                text2={'oddaj niechciane rzeczy' +
                                    ' w zaufane ręce'}
                                classH2 = {'header__h2'}
                            />

                            <div className='header__btns' id='simpleSteps'>
                                <Link to='logowanie' className = 'header__link'>
                                    <button className="btnLarge header__btn">
                                        oddaj <br/>
                                        rzeczy
                                    </button>
                                </Link>

                                <Link to ='logowanie' className = 'header__link'>
                                    <button className="btnLarge header__btn">
                                        zorganizuj <br/>
                                        zbiórkę
                                    </button>
                                </Link>
                            </div>
                        </section>
                    </aside>
                </header>
        </>
    )
};

export default Header;