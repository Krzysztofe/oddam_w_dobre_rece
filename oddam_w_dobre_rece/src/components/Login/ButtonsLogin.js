import {Link} from 'react-router-dom'

const ButtonsLogin = ({link, btnRight, btnLeft}) => {
    return (

        <div className="buttonsLogin">

                <button className='buttonLogin'>
                    <Link to={link}
                          className='buttonLink'>
                    {btnRight}
            </Link>
                </button>


            <button type='submit'
                    className='buttonLogin'>
                {btnLeft}
            </button>

        </div>
    );
};

export default ButtonsLogin;