import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../FireBaseConfig';
import Title from "../Title";
import ButtonsLogin from "./ButtonsLogin";
import NavBar from "../Home/NavBar/NavBar";


const Login = () => {

    const navigate = useNavigate()
    const [inputValueLogin, setInputValueLogin] =
        useState({email: "", password: ""})
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setInputValueLogin({
            ...inputValueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(
            auth,
            inputValueLogin.email,
            inputValueLogin.password
        )
            .then(() => navigate('/'))
            .catch(error => setError(error.code))
    }

    return (
        <>
            <NavBar/>
            <div className='headerSpacer'></div>
            <form onSubmit={handleLogin}
                  className='wrapper wrapper--login'>

                <Title text1={'zaloguj się'}
                       text2={''}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}/>

                <div className="login__inputs">
                    <label className='login__label'>
                        Email
                        <input
                            type='email' name='email'
                            value={inputValueLogin.email}
                            onChange={handleChange}
                            className='login__input'/>
                    </label>

                    <label className='login__label'>
                        Hasło
                        <input
                            type='password' name='password'
                            value={inputValueLogin.password}
                            onChange={handleChange}
                            className='login__input'/>
                    </label>
                </div>

                <h2>{error}</h2>

                <ButtonsLogin link={'/rejestracja'}
                    btnRight={'załuż konto'}
                    btnLeft={'zaloguj się'}/>
            </form>
        </>
    );
};

export default Login;