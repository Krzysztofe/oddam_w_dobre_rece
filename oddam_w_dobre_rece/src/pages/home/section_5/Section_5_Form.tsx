import {useFormik} from "formik"
import useFetchPOST from "../../../hooks/useFetchPOST";
import usePrintFetchError from "../../../hooks/usePrintFetchError";
import * as Yup from 'yup'
import { URL_user_POST} from '../../../data/URL'


const Section_5 = () => {

    const {loadingPOST, errorPOST, createPOST} = useFetchPOST(URL_user_POST)
    const {printError, setPrintError, setButtonClick, usePrintChange} = usePrintFetchError()

    usePrintChange()


    const formik = useFormik({

            initialValues: {
                name: "",
                email: "",
                message: "",
            },
            validationSchema: Yup.object({
                name: Yup.string().matches(
                    /^[a-zA-Z0-9@]+$/,"imię powinno być jednym wyrazem").required("wymagane"),
                email: Yup.string().email("email jest nieprawidłowy").required('wymagane'),
                message: Yup.string().min(2, "wiadomość minimum dwa znaki").required('wymagane'),
            }),
            onSubmit: (values, {resetForm}) => {
                resetForm()
                createPOST(formik.values)
                setPrintError(true)
                setButtonClick(prevState => !prevState)
            }
        }
    )


    let content = null
    let loadingPrint = null

    if (errorPOST) {
        content = errorPOST
    }

    if (loadingPOST) {
        loadingPrint = 'loading...'
    }

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className='contactForm'>

                <div className="contactForm__inputContainer">
                    <label className='contactForm__label'>
                        Wpisz swoje imię
                    </label>
                    <input type='text' name='name'
                           onChange={formik.handleChange}
                           value={formik.values.name}
                           onBlur={formik.handleBlur}
                           className={`contactForm__input
                       ${formik.errors.name && 'contactForm__errorUnderline'}`}
                           placeholder='Imię'/>

                    {formik.touched.name && formik.errors.name
                        ?
                        <div className="contactForm__textInputErrors">
                            {formik.errors.name}
                        </div>
                        :
                        <div className="contactForm__textInputErrorsEmpty">i</div>
                    }
                </div>

                <div className="contactForm__inputContainer">
                    <label className='contactForm__label'>
                        Wpisz swój email
                    </label>
                    <input type='text' name='email'
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className={`contactForm__input
                       ${formik.errors.email && 'contactForm__errorUnderline'}`}
                           placeholder='Email'/>

                    {formik.touched.email && formik.errors.email
                        ?
                        <div className="contactForm__textInputErrors">
                            {formik.errors.email}
                        </div>
                        :
                        <div className="contactForm__textInputErrorsEmpty">i</div>
                    }
                </div>

                <div className="contactForm__inputContainer
                    contactForm__inputContainer--textarea">
                    <label className='contactForm__label'>
                        Wpisz swoją wiadomość
                    </label>
                    <textarea name='message'
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`contactForm__input
                    ${formik.errors.message && 'contactForm__errorUnderline'}`}
                              rows={4}
                              placeholder='Wiadomość'/>

                    {formik.touched.message && formik.errors.message
                        ?
                        <div className="contactForm__textInputErrors">
                            {formik.errors.message}
                        </div>
                        :
                        <div className="contactForm__textInputErrorsEmpty">i</div>
                    }
                </div>

                <button type="submit" className='btnLarge btnLarge--contactForm'>
                    {loadingPrint ? loadingPrint : 'wyślij'}
                </button>
            </form>

            <h2 className='fetchErrors'>
                <span className='fetchErrors__opacity'>r</span>
                {printError && content}
            </h2>
        </>
    );
};

export default Section_5;