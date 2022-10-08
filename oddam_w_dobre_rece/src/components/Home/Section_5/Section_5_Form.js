import {useState} from "react";
import {section_5_FormValidation} from '../../libraryValidations'

const ContactForm = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        textarea: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        textarea: ""
    })
    const [formDatas, setFormDatas] = useState([])

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(section_5_FormValidation(inputValue))

        if (section_5_FormValidation(inputValue) !== '') {
            return
        }

        setFormDatas([...formDatas, inputValue])
        setInputValue({
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
                       ${errors.name && 'contactForm__errorUnderline'}`}
                       value={inputValue.name}
                       onChange={handleChange}
                       placeholder='Imię'/>
                <div className="contactForm__textInputErrors">
                    {errors.name}
                </div>
            </div>

            <div className="contactForm__inputContainer">
                <label className='contactForm__label'>
                    Wpisz swój email
                </label>
                <input type='text' name='email'
                       className={`contactForm__input
                       ${errors.email && 'contactForm__errorUnderline'}`}
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
                    ${errors.textarea && 'contactForm__errorUnderline'}`}
                          value={inputValue.textarea}
                          onChange={handleChange}
                          placeholder='Wiadomość'/>
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