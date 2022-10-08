import {Link} from "react-router-dom";
import Title from "../Title";

const Logout = () => {
    return (
        <>
            <div className='headerSpacer'></div>
            <main className='wrapper wrapper--login'>
                <Title text1={'wylogowanie nastąpiło '}
                       text2={'pomyślnie'}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}
                />
                <Link to='/'>
                    <button className='buttonLogin'>strona główna</button>
                </Link>

            </main>
        </>
    );
};

export default Logout;