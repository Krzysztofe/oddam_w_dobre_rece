import React from 'react';
import Form from './Section_5_Form'
import Tshirt from '../../../asets/IconTshirt.png';
import Facebook from '../../../asets/Facebook.png';
import Instagram from '../../../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'
import HeaderUnderline from "../../Title";

const Contact = () => {
    return (

        <div className="wrapper wrapper--section-5" id='contact'>
            <section className="section-5">
                <div className='section-5__imageMobile'></div>
                <aside className="section-5__right">
                    <HeaderUnderline
                        text1={'skontaktuj się z nami'}
                        classUnderline={'section-5__decoration'}
                    />
                    <Form/>
                    <a href='https://www.facebook.com/'>
                        <img src={Facebook} className='contact__logo' alt='Facebook_logo'/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src={Instagram} className='contact__logo' alt='Instagram_logo'/>
                    </a>
                </aside>
            </section>
        </div>
)
    ;
};

export default Contact;