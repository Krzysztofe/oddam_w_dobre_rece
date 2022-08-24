import React, {useState} from 'react';
import {NavHashLink} from "react-router-hash-link";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from './FirebaseConfig'
import {useNavigate} from 'react-router'

const Register = () => {

    const navigate = useNavigate()
    const [inputValuRregister, setInputValueRegister] =
        useState({email: '', password: '', passwordRepited: ''})

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
                alert('sukces')
            })
            .catch(error => alert(error.code))
    }

    return (
        <form
            onSubmit={handleRegister}
            className='wrapper wrapper--register'
        >
            <h2>załóż konto</h2>

            <label> email </label>
            <input
                type='email' name='email'
                value={inputValuRregister.email}
                onChange={handleChange}
            />

            <label> haslo </label>
            <input
                type='password' name='password'
                value={inputValuRregister.password}
                onChange={handleChange}
            />

            <label> powtórz haslo </label>
            <input
                type='password' name='passwordRepited'
                value={inputValuRregister.passwordRepited}
                onChange={handleChange}
            />

            <div
                className="register__containerButtons">
                <NavHashLink to='/logowanie'>
                    <button> zaloguj się</button>
                </NavHashLink>
                <button> załóż konto</button>
            </div>
        </form>
    );
};

export default Register;