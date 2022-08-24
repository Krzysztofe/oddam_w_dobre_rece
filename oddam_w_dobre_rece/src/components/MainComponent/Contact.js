import React from 'react';
import Underline from "./Underline";
import Form from './Form'
import Tshirt from '../../asets/IconTshirt.png';
import Facebook from '../../asets/Facebook.png';
import Instagram from '../../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <section className="contact">
            <div className="wrapper wrapper--contact" id='contact'>
                <aside className="contact__containerLeft"> </aside>
                <aside className="contact__containerRight">
                    <div className='contact__imageMobile'> </div>
                    <div className="contact__containerInfo">
                        <h2 className='contact__h2'>skontaktuj się z nami</h2>
                        <Underline/>
                     <Form/>
                        <a href='https://www.facebook.com/'>
                            <img src={Facebook} className='contact__logo' alt='Facebook_logo'/>
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img src={Instagram} className='contact__logo' alt='Instagram_logo'/>
                        </a>
                    </div>

                </aside>


            </div>
        </section>
    );
};

export default Contact;