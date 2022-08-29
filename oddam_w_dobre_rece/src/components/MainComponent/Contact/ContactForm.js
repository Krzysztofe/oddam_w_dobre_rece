import React from 'react';
import {useState} from "react";

const ContactForm = () => {
const [inputValue, setInputValue] =
    useState({name:"", email:"", textarea:""})
const [formDatas, setFormDatas] = useState([])

    const handleChange = (e) => {
      setInputValue({...inputValue,
      [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
    e.preventDefault()
      setFormDatas([...formDatas, inputValue])
    }
// console.log(formDatas)

    return (
        <form onSubmit={handleSubmit}>
            <label>Wpisz swoje imie
                <input type='text' name='name'
                       value={inputValue.name}
                onChange={handleChange}/></label>
            <label>Wpisz swoj email
                <input type='email' name ='email'
                       value={inputValue.email}
                       onChange={handleChange}/></label>
            <label>wpisz swoja wiadomość
                <input type='textarea' name='textarea'
                       value={inputValue.textarea}
                       onChange={handleChange}/> </label>
            <input type='submit' value='wyślij'/>
        </form>
    );
};

export default ContactForm;