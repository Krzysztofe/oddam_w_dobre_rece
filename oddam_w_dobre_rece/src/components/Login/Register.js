import React, {useState} from 'react';
import {NavHashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../FireBaseConfig'
import {useNavigate} from 'react-router'
import Title from "../Title";
import Buttons from "../Buttons";
import NavBar from "../Home/NavBar/NavBar";
import ButtonsLogin from "./ButtonsLogin";

const Register = () => {

    const navigate = useNavigate()
    const [inputValuRregister, setInputValueRegister] =
        useState({email: '', password: '', passwordRepited: ''})

    const [error, setError] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setInputValueRegister({
            ...inputValuRregister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,
            inputValuRregister.email,
            inputValuRregister.password)
            .then(() => {
                navigate('/')
                // alert('sukces')
            })
            .catch(error => setError(error.code))
    }

    console.log(auth)

    return (
        <>
            {/*<NavBar/>*/}
            <form onSubmit={handleRegister}
                  className='wrapper wrapper--login'
            >
                <Title text1={'załóż konto'}
                       text2={''}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}
                />

                <div className="login__inputs">
                    <label className='login__label'>
                        Email
                        <input type='email' name='email'
                               value={inputValuRregister.email}
                               onChange={handleChange}
                               className='login__input'
                        />
                    </label>

                    <label className='login__label'>
                        Haslo
                        <input type='password' name='password'
                               value={inputValuRregister.password}
                               onChange={handleChange}
                               className='login__input'
                        />
                    </label>
                    <label className='login__label'>
                        Powtórz haslo
                        <input type='password' name='passwordRepited'
                               value={inputValuRregister.passwordRepited}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                </div>
                <h2>{error}</h2>

                <ButtonsLogin link={'/logowanie'}
                              btnRight={'zaloguj się'}
                              btnLeft={'załuż konto'}/>
            </form>
        </>
    );
};

export default Register;