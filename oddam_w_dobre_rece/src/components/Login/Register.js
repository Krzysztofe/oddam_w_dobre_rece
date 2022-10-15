import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Libraries/FireBaseConfig'
import {useNavigate} from 'react-router'
import Title from "../Title";
import ButtonsLogin from "./ButtonsLogin";
import {registerValidation} from '../Libraries/libraryValidations'

const Register = () => {

    const navigate = useNavigate()
    const [inputValueRregister, setInputValueRegister] = useState({
            email: '',
            password: '',
            passwordRepeated: ''
        })
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setInputValueRegister({
            ...inputValueRregister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setErrors(registerValidation(inputValueRregister))

        if (registerValidation(inputValueRregister).length > 0){
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

                <Title text={['załóż konto']}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}/>

                <div className="login__inputs">

                    <label className='login__label'>
                        Email
                        <input type='text' name='email'
                               value={inputValueRregister.email}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                    <label className='login__label'>
                        Haslo
                        <input type='password' name='password'
                               value={inputValueRregister.password}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                    <label className='login__label'>
                        Powtórz haslo
                        <input type='password' name='passwordRepeated'
                               value={inputValueRregister.passwordRepeated}
                               onChange={handleChange}
                               className='login__input'/>
                    </label>

                </div>

                <p className='login__errors'>{errors}</p>

                <ButtonsLogin link={'/logowanie'}
                              btnRight={'zaloguj się'}
                              btnLeft={'załuż konto'}/>
            </form>
        </>
    );
};

export default Register;