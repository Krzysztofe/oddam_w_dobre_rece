import React from 'react';
import Underline from "../Underline";
import Form from './ContactForm'
import Tshirt from '../../../asets/IconTshirt.png';
import Facebook from '../../../asets/Facebook.png';
import Instagram from '../../../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <section className="contact">
            <div className="wrapper wrapper--contact" id='contact'>
                <div className='contact__imageMobile'> </div>
                <div className="contact__containerInfo">
                    <h2 className='contact__h2'>skontaktuj się z nami</h2>
                    <Underline/>
                    {}
                    {/*<h3>wiadomość została wysłana! wkrótce się skontaktujemy.</h3>*/}

                    <Form/>
                    <a href='https://www.facebook.com/'>
                        <img src={Facebook} className='contact__logo' alt='Facebook_logo'/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src={Instagram} className='contact__logo' alt='Instagram_logo'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;