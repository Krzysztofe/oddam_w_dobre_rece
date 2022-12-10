import React, {useEffect} from "react";
import {useState, ChangeEvent, FormEvent} from "react";
import {section_5_FormValidation} from '../../libraries/libraryValidations'
import useFetchPOST from "../../fetchOperations/useFetchPOST";

const Section_5 = () => {

    const [inputValue, setInputValue] = useState({name: "", email: "", message: ""})

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({name: "", email: "", message: ""})

    const {loadingPOST, errorPOST, createPOST} = useFetchPOST(process.env.REACT_APP_URL_USERS, inputValue)


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

        createPOST()
        setInputValue({
            name: "",
            email: "",
            message: ""
        })
        setPostPrintInfo(true)
        setButtonClick(prevState => !prevState)
    }

    let content = null
    let loadingPrint = null

    if (errorPOST) {
        content = errorPOST
    }

    if (loadingPOST) {
        loadingPrint = 'Przesył informacji'
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

                <button type="submit" className='btnLarge btnLarge--cntactForm'>
                    wyślij
                </button>
            </form>

            <h2 className='fetchErrors'>
                <span className='fetchErrors__opacity'>r</span>
                {loadingPrint}
                {postPrintInfo ? content : null}
            </h2>
        </>
    );
};

export default Section_5;