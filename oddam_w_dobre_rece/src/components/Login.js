import React, {useState} from 'react';
import {NavHashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './FireBaseConfig';
import {useNavigate} from 'react-router';


const Login = () => {

    const navigate = useNavigate()
    const [inputValueLogin, setInputValueLogin] =
        useState({email: "", password: ""})

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
            .then(() => {
                navigate('/')
                alert('sukces')
            })
            .catch(error => alert(error.code))
    }

    return (
        <form
            onSubmit={handleLogin}
            className='wrapper wrapper--login'
        >
            <h2>zaloguj się</h2>
            <label> email</label>
            <input
                type='email' name='email'
                value={inputValueLogin.email}
                onChange={handleChange}
            />

            <label> haslo </label>
            <input
                type='password' name='password'
                value={inputValueLogin.password}
                onChange={handleChange}
            />

            <div className="login__containerButtons">
                <Link to='/rejestracja'>
                    <button> załóż konto</button>
                </Link>
                <button>zaloguj się</button>
            </div>
        </form>
    );
};

export default Login;