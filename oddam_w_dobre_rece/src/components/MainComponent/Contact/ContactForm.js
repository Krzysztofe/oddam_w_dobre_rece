import React from 'react';
import {useState} from "react";

const ContactForm = () => {
    const [inputValue, setInputValue] =
        useState({name: "", email: "", textarea: ""})
    const [errors, setErrors] = useState({name: "", email: "", textarea: ""})
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
        setInputValue(
            {
                ...inputValue,
                name: "",
                email: "",
                textarea: ""
            })
    }
// console.log(formDatas)

    return (

        <form onSubmit={handleSubmit}
              className='contactForm'>

            {/*<h3>wiadomość została wysłana! wkrótce się skontaktujemy.</h3>*/}

            <label className='contactForm__label'>
                Wpisz swoje imie
                <input type='text' name='name'
                       className= {`contactForm__textInput
                          ${errors.name.length && 'contactForm__errorUnderline'}`}
                       value={inputValue.name}
                       onChange={handleChange}/>
            </label>

            <label className='contactForm__label'>
                Wpisz swoj email
                <input type='email' name='email'
                       className= {`contactForm__textInput
                          ${errors.email.length && 'contactForm__errorUnderline'}`}
                       value={inputValue.email}
                       onChange={handleChange}/>
            </label>

            <div className="contactForm__textInputErrors">{errors.name}</div>
            <div className="contactForm__textInputErrors"> {errors.email}</div>

            <label className='contactForm__labelTextarea'>
                wpisz swoja wiadomość
                <textarea name='textarea'
                          rows={3}
                          className= {`contactForm__textarea
                          ${errors.textarea.length && 'contactForm__errorUnderline'}`}
                          value={inputValue.textarea}
                          onChange={handleChange}/>
            </label>

            <div className="contactForm__textareaErrors">{errors.textarea}</div>
            <button className='contactForm__button'>wyślij</button>

        </form>
    );
};

export default ContactForm;