import React from 'react';
import Underline from "../Underline";
import Form from './ContactForm'
import Tshirt from '../../../asets/IconTshirt.png';
import Facebook from '../../../asets/Facebook.png';
import Instagram from '../../../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'
import HeaderUnderline from "../../HeaderUnderline";

const Contact = () => {
    return (
        <section className="contact">
            <div className="wrapper wrapper--contact" id='contact'>
             <div className="opacityBacground">
                <div className='contact__imageMobile'> </div>
                <div className="contact__containerInfo">
                    <HeaderUnderline
                        text1={'skontaktuj się z nami'}
                        classUnderline = {'contact__headerUnderline'}
                    />

                    <Form/>
                    <a href='https://www.facebook.com/'>
                        <img src={Facebook} className='contact__logo' alt='Facebook_logo'/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src={Instagram} className='contact__logo' alt='Instagram_logo'/>
                    </a>
                </div>
             </div>
            </div>
        </section>
    );
};

export default Contact;