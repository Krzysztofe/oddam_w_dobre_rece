import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../data/FireBaseConfig';
import TitleDecor from "../../components/titleDecor/TitleDecor";
import ButtonsLogin from "../../components/buttonsLogin/ButtonsLogin";
import {loginValidation} from "../../validations/libraryValidations";


const Login = () => {

    const navigate = useNavigate()
    const [inputValueLogin, setInputValueLogin] =
        useState({email: "", password: ""})

    const [errors, setErrors] = useState <string | string[]> ('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setInputValueLogin({
            ...inputValueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault()

        setErrors(loginValidation(inputValueLogin))

        if(loginValidation(inputValueLogin).length > 0){
            return
        }

        signInWithEmailAndPassword(
            auth,
            inputValueLogin.email,
            inputValueLogin.password
        )
            .then(() => navigate('/'))
            .catch(error => setErrors(error.code))
    }

    return (
        <>
            <div className='headerSpacer'></div>
            <form onSubmit={handleLogin}
                  className='wrapper wrapper--login'>

                <TitleDecor text={['zaloguj się']}
                            classContainer={''}
                            classH2={''}
                            classUnderline={'login__underline'}/>

                <div className="login__inputs">
                    <p style={{marginBottom: "1rem"}}>login:&nbsp; &nbsp; ww@wp.pl <br/> password: &nbsp; &nbsp; wwwwww</p>
                    <label className='login__label'>
                        Email
                        <input
                            type='text' name='email'
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

                <p className='login__errors'>{errors}</p>

                <ButtonsLogin link={'/rejestracja'}
                              btnRight='załóż konto'
                              btnLeft='zaloguj się'/>
            </form>
        </>
    );
};

export default Login;