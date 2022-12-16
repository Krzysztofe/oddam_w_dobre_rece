import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../data/FireBaseConfig'
import {useNavigate} from 'react-router'
import TitleDecor from "../../components/titleDecor/TitleDecor";
import ButtonsLogin from "../../components/buttonsLogin/ButtonsLogin";
import {registerValidation} from '../../validations/libraryValidations'
import useInputRef from '../../hooks/useInputRef'
import {Typewriter} from "react-simple-typewriter";

export interface IInputValueRregister {
    email: string,
    password: string,
    passwordRepeated: string
}


const Register = () => {

    const navigate = useNavigate()
    const [inputValueRregister, setInputValueRegister] = useState<IInputValueRregister>({
        email: '',
        password: '',
        passwordRepeated: ''
    })
    const [errors, setErrors] = useState<string[] | string>([])
    const {inputFocus, inputRef} = useInputRef()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValueRegister({
            ...inputValueRregister,
            [e.target.name]: e.target.value
        })
    }


    const handleRegister = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setErrors(registerValidation(inputValueRregister))

        if (registerValidation(inputValueRregister).length > 0) {
            return
        }

        createUserWithEmailAndPassword(auth,
            inputValueRregister.email,
            inputValueRregister.password)
            .then(() => navigate('/'))
            .catch(error => setErrors(error.code))
    }

    return (
        <>
            <div className='headerSpacer'></div>
            <form onSubmit={handleRegister}
                  className='wrapper wrapper--login'>

                <TitleDecor text={['załóż konto']}
                            classContainer={''}
                            classH2={''}
                            classUnderline={'login__underline'}/>

                <div className="login__inputs">

                    <label className='login__label'>
                        <Typewriter cursorStyle=''
                                    typeSpeed={300}
                                    words={[ 'Email']}/>
                        <input type='text' name='email'
                               value={inputValueRregister.email}
                               onChange={handleChange}
                               ref={inputRef}
                               className='login__input'/>
                    </label>

                    <label className='login__label'>
                        <Typewriter cursorStyle=''
                                    typeSpeed={300}
                                    words={['Hasło']}/>
                        <input type='password' name='password'
                               value={inputValueRregister.password}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                    <label className='login__label'>
                        <Typewriter cursorStyle=''
                                    typeSpeed={300}
                                    words={['Powtórz hasło']}/>
                        <input type='password' name='passwordRepeated'
                               value={inputValueRregister.passwordRepeated}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                </div>

                <p className='login__errors'>{errors}</p>

                <ButtonsLogin link={'/logowanie'}
                              btnRight='załuż konto'
                              btnLeft='zaloguj się'
                              inputFocus = {inputFocus}
                />
            </form>
        </>
    );
};

export default Register;