import React, {useEffect} from "react";
import {useState, ChangeEvent, FormEvent} from "react";
import {section_5_FormValidation} from '../../libraries/libraryValidations'
import {fetchPostUser} from '../../fetchOperations/fetchOperations'

export interface IInputValue {
    name: string;
    email: string;
    message: string;
}

interface IErrors {
    name: string;
    email: string;
    message: string;
}

export interface IFormData {
    name: string;
    email: string;
    message: string;
}


const Section_5 = () => {

    const [inputValue, setInputValue] = useState<IInputValue>({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState<IErrors>({
        name: "",
        email: "",
        message: ""
    })

    const [fetchErrors, setFetchErrors] = useState<null | string>(null)

    const [postPrintInfo, setPostPrintInfo] = useState(false)
    const [buttonClick, setButtonClick] = useState(false)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setPostPrintInfo(false)
        }, 4000)

        return () => {
            clearTimeout(timeId)
        }
    }, [buttonClick])


    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setErrors(section_5_FormValidation(inputValue))

        if (section_5_FormValidation(inputValue).name !== '' ||
            section_5_FormValidation(inputValue).message !== '' ||
            section_5_FormValidation(inputValue).email !== '') {
            return
        }

        fetchPostUser(inputValue, setFetchErrors)

        setPostPrintInfo(true)
        setButtonClick(prevState => !prevState)
        setInputValue({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                  className='contactForm'>

                <div className="contactForm__inputContainer">
                    <label className='contactForm__label'>
                        Wpisz swoje imię
                    </label>
                    <input type='text' name='name'
                           value={inputValue.name}
                           onChange={handleChange}
                           className={`contactForm__input
                       ${errors.name && 'contactForm__errorUnderline'}`}
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
                           value={inputValue.email}
                           onChange={handleChange}
                           className={`contactForm__input
                       ${errors.email && 'contactForm__errorUnderline'}`}
                           placeholder='Email'/>
                    <div className="contactForm__textInputErrors">
                        {errors.email}
                    </div>
                </div>

                <div className="contactForm__inputContainer
            contactForm__inputContainer--textarea">
                    <label className='contactForm__label'>
                        Wpisz swoją wiadomość
                    </label>
                    <textarea name='message'
                              value={inputValue.message}
                              onChange={handleChange}
                              className={`contactForm__input
                    ${errors.message && 'contactForm__errorUnderline'}`}
                              rows={4}
                              placeholder='Wiadomość'/>
                    <div className="contactForm__textInputErrors">
                        {errors.message}
                    </div>
                </div>

                <button type = "submit" className='btnLarge btnLarge--cntactForm'>
                    wyślij
                </button>
            </form>

            <h2 className='fetchErrors'>
                <span className='fetchErrors__opacity'>r</span>
                {postPrintInfo ? fetchErrors : null}
            </h2>
        </>
    );
};

export default Section_5;