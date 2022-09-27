import React from 'react';
import {useState} from "react";

const ContactForm = () => {
    const [inputValue, setInputValue] = useState(
        {name: "", email: "", textarea: ""})
    const [errors, setErrors] = useState(
        {name: "", email: "", textarea: ""})
    const [formDatas, setFormDatas] = useState([])

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const _errorsName = []
        const _errorsEmail = []
        const _errorsTextarea = []

        // if (inputValue.name.includes(" ")) {
        //     _errors.push('podane imię jest nieprawidłowe')
        // }
        if (inputValue.name.length < 5) {
            _errorsName.push('podane imię jest nieprawidłowe')
        }
        if (inputValue.email.length < 5) {
            _errorsEmail.push('podane imię jest nieprawidłowe')
        }
        if (inputValue.textarea.length < 2) {
            _errorsTextarea.push('wiadomość wymaga 5 znaków')
        }

        setErrors({
            ...errors,
            name: _errorsName,
            email: _errorsEmail,
            textarea: _errorsTextarea
        })

        if (_errorsName.length > 0
            || _errorsEmail.length > 0
            || _errorsTextarea.length > 0) {
            return
        }

        setFormDatas([...formDatas, inputValue])
        setInputValue({
            ...inputValue,
            name: "",
            email: "",
            textarea: ""
        })
    }

    return (

        <form onSubmit={handleSubmit}
              className='contactForm'>

            <div className="contactForm__inputContainer">
                <label className='contactForm__label'>
                    Wpisz swoje imię
                </label>
                <input type='text' name='name'
                       className={`contactForm__input
                          ${errors.name.length && 'contactForm__errorUnderline'}`}
                       value={inputValue.name}
                       onChange={handleChange}
                       placeholder='Imię'
                />
                <div className="contactForm__textInputErrors">
                    {errors.name}
                </div>
            </div>

            <div className="contactForm__inputContainer">
                <label className='contactForm__label'>
                    Wpisz swój email
                </label>
                <input type='email' name='email'
                       className={`contactForm__input
                          ${errors.email.length && 'contactForm__errorUnderline'}`}
                       value={inputValue.email}
                       onChange={handleChange}
                       placeholder='Email'
                />
                <div className="contactForm__textInputErrors">
                    {errors.email}
                </div>
            </div>

            <div className="contactForm__inputContainer
            contactForm__inputContainer--textarea">
                <label className='contactForm__label'>
                    Wpisz swoją wiadomość
                </label>
                <textarea name='textarea'
                          rows={4}
                          className={`contactForm__input
                          ${errors.textarea.length && 'contactForm__errorUnderline'}`}
                          value={inputValue.textarea}
                          onChange={handleChange}
                          placeholder='Wiadomość'
                />
                <div className="contactForm__textInputErrors">
                    {errors.textarea}
                </div>
            </div>

            <button className='contactForm__button'>
                wyślij
            </button>
        </form>
    );
};

export default ContactForm;